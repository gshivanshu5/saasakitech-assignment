'use client'
import React, { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadarController,
  Filler,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  RadarController,
  Filler,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

const RadarChart = () => {
  const [labels, setLabels] = useState<string[]>(["Laptop", "Smartphone", "Headphones", "Camera", "Smartwatch", "Tablet"]);
  const [data, setData] = useState<number[]>([1500, 800, 200, 1200, 300, 600]);

  const handleLabelChange = (index: number, value: string) => {
    const newLabels = [...labels];
    newLabels[index] = value;
    setLabels(newLabels);
  };

  const handleDataChange = (index: number, value: number) => {
    const newData = [...data];
    newData[index] = value;
    setData(newData);
  };

  const totalCost = data.reduce((acc, value) => acc + value, 0);
  const averageCost = totalCost / data.length;
  const maxCost = Math.max(...data);
  const minCost = Math.min(...data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Shopping Product Costs",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)", 
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Interactive Radar Chart",
      },
    },
    scales: {
      radar: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: Math.max(...data) * 1.2,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="p-4 max-w-[500px] mx-auto">
      <h1 className="font-bold text-[40px] mb-7">Radar Chart</h1>
      <div className="mb-4">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={label}
              onChange={(e) => handleLabelChange(index, e.target.value)}
              placeholder={`Product ${index + 1}`}
              className="mr-2 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="number"
              value={data[index]}
              onChange={(e) => handleDataChange(index, parseInt(e.target.value))}
              placeholder={`Cost ${index + 1}`}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-[24px] mb-4">Statistics</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium">Total Cost</h3>
            <p className="text-xl font-bold">${totalCost.toFixed(2)}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium">Average Cost</h3>
            <p className="text-xl font-bold">${averageCost.toFixed(2)}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium">Max Cost</h3>
            <p className="text-xl font-bold">${maxCost.toFixed(2)}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium">Min Cost</h3>
            <p className="text-xl font-bold">${minCost.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div
        className={`transition-transform duration-300 ease-in-out ${isHovered ? 'transform scale-105' : 'transform scale-100'} h-[500px]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Radar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;

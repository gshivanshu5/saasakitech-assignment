'use client'
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [labels, setLabels] = useState<string[]>(["January", "February", "March", "April", "May", "June", "July"]);
  const [data, setData] = useState<number[]>([65, 59, 80, 81, 56, 55, 40]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: data,
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
        text: "Interactive Bar Chart",
      },
    },
  };

  return (
    <div className="p-4 max-w-[500px] mx-auto  ">
      <h1 className="font-bold text-[40px] mb-7">Bar Chart</h1>
      <div className="mb-4">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center mb-2">
            <input
              type="text"
              value={label}
              onChange={(e) => handleLabelChange(index, e.target.value)}
              placeholder={`Label ${index + 1}`}
              className="mr-2 p-2 border border-gray-300 rounded-md w-full"
            />
            <input
              type="number"
              value={data[index]}
              onChange={(e) => handleDataChange(index, parseInt(e.target.value))}
              placeholder={`Data ${index + 1}`}
              className="p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        ))}
      </div>
      <div
        className={`transition-transform duration-300 ease-in-out ${isHovered ? 'transform scale-105' : 'transform scale-100'} h-[400px]`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChart;

// components/DoughnutChart.tsx
'use client'
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = () => {
    const [labels, setLabels] = useState<string[]>(["Apple", "Banana", "Cherry", "Date", "Grape", "Orange"]);
    const [data, setData] = useState<number[]>([12, 19, 3, 5, 2, 3]);
    const [colors, setColors] = useState<string[]>([
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4BC0C0",
        "#9966FF",
        "#FF9F40"
    ]);
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

    const handleColorChange = (index: number, value: string) => {
        const newColors = [...colors];
        newColors[index] = value;
        setColors(newColors);
    };

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: "# of Votes",
                data: data,
                backgroundColor: colors,
                borderColor: colors.map(color => `${color}80`), // Slightly transparent border
                borderWidth: 1,
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
                text: "Interactive Doughnut Chart",
            },
        },
    };

    return (
        <div className="p-4 max-w-[500px] mx-auto">
            <h1 className="font-bold text-[40px] mb-7">Doughnut Chart</h1>
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
                            className="mr-2 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <input
                            type="color"
                            value={colors[index]}
                            onChange={(e) => handleColorChange(index, e.target.value)}
                            className="ml-2 p-1 border border-gray-300 rounded-md"
                        />
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h2 className="font-semibold text-[24px] mb-4">Data Table</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="p-2 text-left">Fruit</th>
                                <th className="p-2 text-left">Quantity</th>
                                <th className="p-2 text-left">Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {labels.map((label, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="p-2">{label}</td>
                                    <td className="p-2">{data[index]}</td>
                                    <td className="p-2">
                                        <div
                                            className="w-6 h-6 rounded-full inline-block"
                                            style={{ backgroundColor: colors[index] }}
                                        ></div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div
                className={`transition-transform duration-300 ease-in-out ${isHovered ? 'transform scale-105' : 'transform scale-100'} h-[500px]`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Doughnut data={chartData} options={options} />
            </div>
        </div>
    );
};

export default DoughnutChart;

// components/SettingsPage.tsx
'use client'
import React, { useState } from "react";

const SettingsPage = ({ onChartTypeChange }: { onChartTypeChange: (chartType: string) => void }) => {
  const [selectedChartType, setSelectedChartType] = useState<string>("All");

  const handleChartTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chartType = event.target.value;
    setSelectedChartType(chartType);
    onChartTypeChange(chartType);
  };

  return (
    <div className="p-4 max-w-[800px] mx-auto">
      <h1 className="font-bold text-[40px] mb-7">Select Chart Type:</h1>
      <div className="mb-4">
        <select
          value={selectedChartType}
          onChange={handleChartTypeChange}
          className="p-2 border border-gray-300 rounded-md w-full"
        >
          <option value="All">All Chart</option>
          <option value="Pie" >Pie Chart</option>
          <option value="Bar">Bar Chart</option>
          <option value="Doughnut">Doughnut Chart</option>
          <option value="PolarArea">Polar Area Chart</option>
          <option value="Radar">Radar Chart</option>
        </select>
      </div>
    </div>
  );
};

export default SettingsPage;

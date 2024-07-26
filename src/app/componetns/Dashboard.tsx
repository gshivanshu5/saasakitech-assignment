'use client'
import React, { useState } from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import DoughtnutChart from './DoughtnutChart'
import PolarAreaChart from './PolarAreaChart'
import Statistics from './Statistics'
import SettingsPage from "./SettingsPage";

const Dashboard = () => {
  const [chartType, setChartType] = useState<string>("All");

  const renderChart = () => {
    switch (chartType) {
      case "All":
        return (
          <>
            <PieChart />
            <DoughtnutChart />
            <PolarAreaChart />
            <Statistics />
            <BarChart />
          </>
        );
      case "Bar":
        return <BarChart />
      case "Pie":
        return <PieChart />;
      case "Doughnut":
        return <DoughtnutChart />;
      case "PolarArea":
        return <PolarAreaChart />;
      case "Radar":
        return <Statistics />;
      default:
        return (
          <>
            <PieChart />
            <DoughtnutChart />
            <PolarAreaChart />
            <Statistics />
            <BarChart />
          </>
        );
    }
  };

  return (
    <div className="m-auto">
      <SettingsPage onChartTypeChange={setChartType} />
      <h1 className="font-bold text-[40px] mb-7 text-center">Dashboard</h1>
      <div className="p-4 max-w-full flex flex-wrap gap-[2px]">
        {renderChart()}
      </div>
    </div>
  );
};

export default Dashboard;

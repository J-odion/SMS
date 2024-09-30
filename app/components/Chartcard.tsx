"use client"; // Add this at the top to enable client-side rendering

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ProgressChartProps {
  value: number;  // Progress value passed as a prop (0-100)
  total?: string; // Optional total value like "22/30"
}

const ProgressChart: React.FC<ProgressChartProps> = ({ value, total }) => {
  // Get the color for the chart based on the value
  const getColor = () => {
    if (value > 60) return '#0BC279';  // Values above 60 are green
    if (value >= 40) return '#FFDF37'; // Values between 40 and 60 are yellow
    return 'red';                     // Values below 40 are red
  };

  // Data for the Doughnut chart
  const data = {
   
    datasets: [
      {
        data: [value, 100 - value], // Progress and remaining values
        backgroundColor: [getColor(), '#e0e0e0'], // Dynamic color + grey for remaining part
        borderWidth: 0, // No border around the segments
      },
    ],
  };

  // Options for the Doughnut chart
  const options = {
    cutout: '90%', // Makes the doughnut thinner (optional)
    plugins: {
      tooltip: { enabled: false }, // Disable tooltips
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: 120, height: 120 }}>
      <Doughnut data={data} options={options} />
      <div className="relative text-center font-bold font-sm items-center top-[-80px]">
        <p>{`${value}%`}</p>
        {total && <p className="text-xs text-[#75819A] font-normal">{total}</p>}
      </div>
    </div>
  );
};

export default ProgressChart;

import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './scan-completion-pie-chart.css';
import { scanCompletionChartColorsConfig, scanCompletionChartLabelsConfig, scanCompletionChartPieOptions } from './config/scan-completion-pie-chart.config';

ChartJS.register(ArcElement, Tooltip, Legend);

const ScanCompletionPieChart = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref) {
      console.log(ref);
    }

  }, [])
  const data = {
    labels: scanCompletionChartLabelsConfig,
    datasets: [
      {
        label: 'Scan Completion',
        data: [40, 28, 20, 12], // TODO - change to real data here
        backgroundColor: scanCompletionChartColorsConfig,
        borderWidth: 0, // make sure there is no spaces between pie slices
      },
    ],
  };

  const options = scanCompletionChartPieOptions;

  return (
    <div className='w-full mx-auto'>
      <div className='h-[200px]'>
        <Pie ref={ref} data={data} options={options} />
      </div>
    </div>
  );
};

export default ScanCompletionPieChart;

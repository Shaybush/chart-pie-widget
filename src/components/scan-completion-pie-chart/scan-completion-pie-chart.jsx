import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './scan-completion-pie-chart.css';
import { scanCompletionChartColorsConfig, scanCompletionChartLabelsConfig, scanCompletionChartPieOptions } from './config/scan-completion-pie-chart.config';

ChartJS.register(ArcElement, Tooltip, Legend);

const ScanCompletionPieChart = () => {
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
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ position: 'relative', height: '300px' }}>
        <Pie className='something-crazy' data={data} options={options} />
      </div>
    </div>
  );
};

export default ScanCompletionPieChart;

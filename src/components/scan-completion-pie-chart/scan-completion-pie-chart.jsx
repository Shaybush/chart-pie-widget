import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './scan-completion-pie-chart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const ScanCompletionPieChart = () => {
  const data = {
    labels: ['Move-Outs', 'Move-Ins', 'New Scans', 'New Reports'],
    datasets: [
      {
        label: 'Scan Completion',
        data: [40, 28, 20, 12], // Percentages
        backgroundColor: [ // TODO - change the colors here 
          '#3366CC', // Move-Outs
          '#8C9EFF', // Move-Ins
          '#99CCFF', // New Scans
          '#D9E8FB', // New Reports
        ],
        borderWidth: 0, // width
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 15, // TODO - if you want to change the space between the labels 
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label, i) => ({
              text: label,
              fillStyle: datasets[0].backgroundColor[i],
              strokeStyle: datasets[0].borderColor,
              lineWidth: 6,
              index: i,
            }));
          },
        },
      },
      tooltip: {
        enabled: false, // Disable the default tooltip
        external: function (context) {
          // Tooltip Element
          let tooltipEl = document.getElementById('chartjs-tooltip');

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<div></div>';
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          const tooltipModel = context.tooltip;
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set Text
          if (tooltipModel.body) {
            const bodyLines = tooltipModel.body.map(b => b.lines);

            const innerHtml = `<div style="background-color: ${tooltipModel.labelColors[0].backgroundColor}; 
            color: white; border-radius: 50%; width: 50px; height: 50px; display: flex; justify-content: center; align-items: center;">
            ${bodyLines[0]}</div>`;

            let tooltipRoot = tooltipEl.querySelector('div');
            tooltipRoot.innerHTML = innerHtml;
          }

          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 25 + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 50 + 'px';
          tooltipEl.style.pointerEvents = 'none';
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ position: 'relative', height: '300px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default ScanCompletionPieChart;

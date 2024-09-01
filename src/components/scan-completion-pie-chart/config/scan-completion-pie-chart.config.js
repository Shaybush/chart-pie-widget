export const scanCompletionChartColorsConfig = [ // TODO - change the colors here 
  '#3366CC', // Move-Outs
  '#8C9EFF', // Move-Ins
  '#99CCFF', // New Scans
  '#D9E8FB', // New Reports
]

export const scanCompletionChartLabelsConfig = ['Move-Outs', 'Move-Ins', 'New Scans', 'New Reports'];

export const scanCompletionChartPieOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      color: '#000000',
      labels: {
        padding: 15, // TODO - if you want to change the space between the labels 
        generateLabels: (chart) => {
          const datasets = chart.data.datasets;
          return chart.data.labels.map((label, i) => ({
            text: label,
            fillStyle: datasets[0].backgroundColor[i],
            strokeStyle: '#ffffff', // default color 
            lineWidth: 6,
            index: i,
          }));
        },
        font: {
          color: '#000000', // ensure label text is black
        },
      },
    },
    tooltip: {
      // TODO - some reason not working 
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
import React from "react";
import ScanCompletionPieChart from "../components/scan-completion-pie-chart/scan-completion-pie-chart";

const ScanCompletionChartWidget = () => {
  return (
    <div className="card w-1/3 border p-3 rounded">
      <div className="flex items-center justify-between mb-3">
        <h2 className="m-0 p-0 font-bold">Scan Completion</h2>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
        </svg>
      </div>
      <ScanCompletionPieChart />
    </div>
  );
};

export default ScanCompletionChartWidget;

import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.css";

//* Component
const Chart = (props) => {
  const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const highestExpenseValue = Math.max(...dataPointValue);

  //* return
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={highestExpenseValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

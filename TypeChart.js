import React from "react";
import Plot from "react-plotly.js";

const TypeChart = ({ alerts }) => {
  const typeCount = alerts.reduce((acc, alert) => {
    acc[alert.Type] = (acc[alert.Type] || 0) + 1;
    return acc;
  }, {});

  return (
    <Plot
      data={[{
        labels: Object.keys(typeCount),
        values: Object.values(typeCount),
        type: "pie"
      }]}
      layout={{ title: "Alerts by Type" }}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default TypeChart;

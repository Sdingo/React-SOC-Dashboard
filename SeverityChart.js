import React from "react";
import Plot from "react-plotly.js";

const SeverityChart = ({ alerts }) => {
  const severityCount = alerts.reduce((acc, alert) => {
    acc[alert.Severity] = (acc[alert.Severity] || 0) + 1;
    return acc;
  }, {});

  return (
    <Plot
      data={[{
        x: Object.keys(severityCount),
        y: Object.values(severityCount),
        type: "bar",
        marker: { color: "orange" }
      }]}
      layout={{ title: "Alerts by Severity" }}
      style={{ width: "100%", height: "400px" }}
    />
  );
};

export default SeverityChart;

import React, { useState } from "react";

const AlertTable = ({ alerts }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedAlerts = [...alerts];
  if (sortConfig.key) {
    sortedAlerts.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }

  const requestSort = key => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
  };

  const getSortIndicator = key => {
    if (sortConfig.key === key) return sortConfig.direction === "asc" ? " 🔼" : " 🔽";
    return "";
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort("AlertID")}>ID{getSortIndicator("AlertID")}</th>
            <th onClick={() => requestSort("Timestamp")}>Timestamp{getSortIndicator("Timestamp")}</th>
            <th onClick={() => requestSort("Source")}>Source{getSortIndicator("Source")}</th>
            <th onClick={() => requestSort("Type")}>Type{getSortIndicator("Type")}</th>
            <th onClick={() => requestSort("Severity")}>Severity{getSortIndicator("Severity")}</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sortedAlerts.map(alert => (
            <tr key={alert.AlertID}>
              <td>{alert.AlertID}</td>
              <td>{alert.Timestamp}</td>
              <td>{alert.Source}</td>
              <td>{alert.Type}</td>
              <td
                style={{
                  backgroundColor:
                    alert.Severity === "High" ? "#ff4d4f" :
                    alert.Severity === "Medium" ? "#faad14" :
                    alert.Severity === "Low" ? "#52c41a" :
                    "transparent",
                  color: alert.Severity === "High" ? "white" : "black",
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                {alert.Severity}
              </td>
              <td>{alert.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertTable;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SeverityChart from "./components/SeverityChart";
import TypeChart from "./components/TypeChart";
import AlertTable from "./components/AlertTable";
import "./styles.css";

function App() {
  const [alerts, setAlerts] = useState([]);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [severityFilter, setSeverityFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Fetch alerts from backend
  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/alerts")
      .then(res => {
        setAlerts(res.data);
        setFilteredAlerts(res.data);
      })
      .catch(err => console.error("Error fetching alerts:", err));
  }, []);

  // Apply filters
  useEffect(() => {
    let temp = alerts;
    if (severityFilter !== "All") temp = temp.filter(a => a.Severity === severityFilter);
    if (typeFilter !== "All") temp = temp.filter(a => a.Type === typeFilter);
    setFilteredAlerts(temp);
  }, [severityFilter, typeFilter, alerts]);

  const severities = ["All", ...new Set(alerts.map(a => a.Severity))];
  const types = ["All", ...new Set(alerts.map(a => a.Type))];

  return (
    <div className="container">
      <h1>SOC Alert Dashboard</h1>
      <p>Total Alerts: {filteredAlerts.length}</p>

      <button onClick={() => setDarkMode(!darkMode)} style={{marginBottom: "10px"}}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <div className="filters">
        <label>
          Severity:
          <select value={severityFilter} onChange={e => setSeverityFilter(e.target.value)}>
            {severities.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>

        <label>
          Type:
          <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
      </div>

      <div className="charts">
        <SeverityChart alerts={filteredAlerts} />
        <TypeChart alerts={filteredAlerts} />
      </div>

      <AlertTable alerts={filteredAlerts} />
    </div>
  );
}

export default App;

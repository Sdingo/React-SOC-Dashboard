# SOC Alert Dashboard

A React-based Security Operations Center (SOC) dashboard that visualizes security alerts in a compact, color-coded table with dark mode support. The dashboard helps analysts quickly assess potential threats by categorizing alerts by severity (Low, Medium, High, Critical).

---

## Features

- ⚡ **Compact Alert Table** – View all alerts in a single page without scrolling.  
- 🎨 **Color-Coded Severity** – Alerts are visually distinguished by severity (Low = Green, Medium = Orange, High = Red, Critical = Dark Red).  
- 🌙 **Dark/Light Mode Toggle** – Switch between light and dark themes for flexible environments.  
- 📊 **Extensible Visualization** – Ready for integration with charts using Plotly.js.  
- 🔗 **IOC Checker Integration (Future)** – Can be linked to the IOC Checker tool for cross-verifying alerts with known indicators of compromise (IOCs).  

---

## Problem Statement

SOC analysts often deal with large volumes of alerts from different security tools. Navigating cluttered dashboards or scrolling through endless alert logs slows down response times and makes it harder to prioritize critical threats.

---

## Solution

The SOC Alert Dashboard provides a **lightweight, frontend-only interface** for presenting security alerts in a compact, readable format. With **color-coded severity** and **dark mode support**, analysts can quickly triage threats without distraction. The design also leaves room for expansion—future integration with the **IOC Checker** can automatically validate alerts against threat intelligence data.

---

## Tech Stack

- [React.js](https://reactjs.org/) – Frontend framework  
- [Axios](https://axios-http.com/) – Data fetching  
- [Plotly.js](https://plotly.com/javascript/) – (Optional) Data visualization  
- [React-Plotly.js](https://github.com/plotly/react-plotly.js) – React wrapper for Plotly  

---


Future Work

Link with the IOC Checker for live threat intelligence validation.

Add authentication for multi-user environments.

Expand visualization with charts (alert trends, severity distribution, etc.).


"A React.js-powered SOC dashboard for compact, color-coded visualization of security alerts.”

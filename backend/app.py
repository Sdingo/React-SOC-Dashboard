# backend/app.py
from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so React frontend can access

# Load CSV alerts
alerts_df = pd.read_csv("alerts.csv", parse_dates=["Timestamp"])

@app.route("/api/alerts")
def get_alerts():
    alerts = alerts_df.to_dict(orient="records")
    return jsonify(alerts)

if __name__ == "__main__":
    app.run(debug=True)

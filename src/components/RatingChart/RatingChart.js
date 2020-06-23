import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

function RatingChart({ data, xAxisDataKey, barDataKey, barLabel }) {
  return (
    <div className="rating-chart">
      <h3>Rating graph</h3>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="6 6" />
          <XAxis dataKey={xAxisDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            barSize={20}
            dataKey={barDataKey}
            fill="#8884d8"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RatingChart;

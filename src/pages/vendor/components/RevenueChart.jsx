// src/AreaChart.js
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', uv: 400, amt: 140 },
  { name: 'Feb', uv: 300, amt: 220 },
  { name: 'Mar', uv: 200, amt: 220 },
  { name: 'Apr', uv: 278, amt: 200 },
  { name: 'May', uv: 189, amt: 210 },
  { name: 'Jun', uv: 239, amt: 250 },
  { name: 'Jul', uv: 349, amt: 210 },
];

const RevenueChart = () => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#F58634" fill="#F5863414" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default RevenueChart;

// src/PieChart.js
import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
    { name: 'Delivered', value: 400, color: '#0088FE' },
    { name: 'Returns (3)', value: 50, color: '#DFE30F' },
    { name: 'Ready to ship (3)', value: 300, color: '#E38E0F' },
    { name: 'Shipped', value: 150, color: '#9747FF' },
    { name: 'Pending (3)', value: 100, color: '#E3140F' },
    { name: 'Processing (30)', value: 300, color: '#7BB8FF' },
  ];
  
const OrderStatusChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          // isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          // outerRadius={80}
          // label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default OrderStatusChart;

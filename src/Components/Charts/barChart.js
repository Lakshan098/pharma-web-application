import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const barChart = (props) => {
    const data = props.data;
    const y = props.y;
    const x = props.x;
    return(
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={y} />
                <YAxis/>
                <Tooltip />
                <Legend />
                <Bar dataKey={x} fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>      
    );
}

export default barChart;
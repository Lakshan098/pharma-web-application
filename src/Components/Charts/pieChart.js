import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = (props) => {
    const data = props.data;
    return(
        <div>
            <Doughnut 
                data={data}
            />
        </div>        
    );
}

export default PieChart;
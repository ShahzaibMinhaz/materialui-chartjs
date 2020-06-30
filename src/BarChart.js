import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Data',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,0.4)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 67]
    },
    {
        label: 'My Second Data',
        backgroundColor: 'rgba(80,90,76,0.4)',
        borderColor: 'rgba(80,90,76,0.6)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(80,90,76,0.8)',
        hoverBorderColor: 'rgba(80,90,76,1)',
        data: [89, 43, 76, 21, 75, 45, 90]
    }
  ]
};

function BarChart(){
    return (
      <div>
        <h2>Example Bar Chart</h2>
        <Bar
          data={data}
          width={100}
          height={250}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
}

export default BarChart



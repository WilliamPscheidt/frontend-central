import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Ótimo', 'Regular', 'Ruim'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 10],
      backgroundColor: [
        'rgba(22, 91, 170, 1)',
        'rgba(161, 85, 185, 1)',
        'rgba(255, 165, 203, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
      yAxes: {
          ticks: {
              display: false,
              color: 'white',
              font: {
                  size: 16
              },
              beginAtZero: true,
              stepSize: 20,
          },
          grid: {
              display: false,
              color: '#4F4F4F'
          }
      },
      xAxes:
      {
          ticks: {
              display: false,
              color: '#fff',
              font: {
                  size: 16
              },
              beginAtZero: true,
              stepSize: 20,
          },
          grid: {
              display: false,
              color: '#4F4F4F',
          }
      }
  },
  plugins: {
      legend: {
          display: true,
          position: 'right',
          align: 'start',
          labels: {
            color: "white"
          }
      }
  }
};

export default function Avaliacoes() {
    return (<PolarArea data={data} options={options} />)
}
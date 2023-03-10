import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
} from 'chart.js';
import {
    Chart,
} from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                beginAtZero: true,
                backdropColor: 'red',
                display: true,
                color: 'white',
                font: {
                    size: 14
                },
                stepSize: 0,
            },
            grid: {
                display: true,
                color: '#4F4F4F',
                lineWidth: 0.1,
            },
        },
        x:
        {
            ticks: {
                beginAtZero: true,
                display: true,
                color: '#fff',
                font: {
                    size: 12
                },
                stepSize: 0,
            },
            grid: {
                display: true,
                color: '#4F4F4F',
                lineWidth: 0.1,
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            align: 'start',
            labels: {
                color: "white"
              }
        }
    }
};

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
        {
            type: 'bar',
            label: 'Regular',
            backgroundColor: 'rgb(22, 91, 170)',
            data: [70, 10, 85, 81, 56, 60, 40],
            borderColor: 'white',
            borderWidth: 0,
        },
        {
            type: 'bar',
            label: 'Regular',
            backgroundColor: 'rgb(161, 85, 185)',
            data: [50, 80, 59, 85, 0, 56, 60, 40],
            borderColor: 'white',
            borderWidth: 0,
        },
        {
            type: 'bar',
            label: 'Ruim',
            backgroundColor: 'rgb(247, 101, 163)',
            data: [16, 40, 65, 59, 81, 80, 0],
            borderColor: 'white',
            borderWidth: 0,
        },
    ],
};

export default function TotalLigacoes() {
    return (
        <Chart
            type='bar'
            options={options}
            data={data}
        />
    );
}
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import dayjs from 'dayjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
      position: 'top',
      labels: {
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 10,
          weight: 'bold',
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 10,
          weight: 'bold',
        },
        beginAtZero: true,
        max: 100, 
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt', 'Sep', 'Okt', 'Nov', 'Des'];

const StatusChart = ({ data }) => {
  const totalAppointments = Array(12).fill(0);
  const completedCounts = Array(12).fill(0);
  const canceledCounts = Array(12).fill(0);

  data.forEach((appointment) => {
    const monthIndex = dayjs(appointment.date).month();
    totalAppointments[monthIndex]++;
    if (appointment.status === "Selesai") {
      completedCounts[monthIndex]++;
    } else if (appointment.status === "Batal") {
      canceledCounts[monthIndex]++;
    }
  });

  const completedPercentages = completedCounts.map((count, index) =>
    totalAppointments[index] ? (count / totalAppointments[index]) * 100 : 0
  );
  const canceledPercentages = canceledCounts.map((count, index) =>
    totalAppointments[index] ? (count / totalAppointments[index]) * 100 : 0
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Selesai',
        data: completedPercentages,
        borderColor: 'rgb(27, 179, 87)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        tension: 0.1,
        pointRadius: 0,
      },
      {
        label: 'Batal',
        data: canceledPercentages,
        borderColor: 'rgb(215, 39, 41)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="w-full h-full mt-2">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default StatusChart;

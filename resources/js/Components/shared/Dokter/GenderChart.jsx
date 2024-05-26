import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const GenderChart = ({ data }) => {
    // Hitung data
    const maleCount = data.filter(
        (appointment) => appointment.gender === "Laki-laki"
    ).length;
    const femaleCount = data.filter(
        (appointment) => appointment.gender === "Perempuan"
    ).length;

    // Konfigurasi data
    const chartData = {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [
            {
                label: "My First Dataset",
                data: [maleCount, femaleCount],
                backgroundColor: ["#4dc5c8", "#d72729"],
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const total = context.dataset.data.reduce((acc, value) => acc + value, 0);
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${percentage}%`;
                    },
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 0,
                bottom: 0,
            },
        },
    };

    return (
        <div className="h-full">
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default GenderChart;

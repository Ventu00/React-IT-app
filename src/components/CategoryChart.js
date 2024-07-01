import React from 'react';
import { Bar } from 'react-chartjs-2';

const CategoryChart = ({ categories, incidents }) => {
    // Función para contar incidencias por categoría
    const countByCategory = (category) => {
        return incidents.filter(incident => incident.category === category).length;
    };

    // Datos para el gráfico de barras
    const chartData = {
        labels: categories,
        datasets: [
            {
                label: 'Número de Incidencias',
                data: categories.map(category => countByCategory(category)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // Opciones del gráfico
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div>
            <h3>Gráfico de Incidencias por Categoría</h3>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default CategoryChart;

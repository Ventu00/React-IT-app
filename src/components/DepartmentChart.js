import React from 'react';
import { Bar } from 'react-chartjs-2';

const DepartmentChart = ({ departments, incidents }) => {
    // Función para contar incidencias por departamento
    const countByDepartment = (department) => {
        return incidents.filter(incident => incident.department === department).length;
    };

    // Datos para el gráfico de barras
    const chartData = {
        labels: departments,
        datasets: [
            {
                label: 'Número de Incidencias',
                data: departments.map(department => countByDepartment(department)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
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
            <h3>Gráfico de Incidencias por Departamento</h3>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default DepartmentChart;

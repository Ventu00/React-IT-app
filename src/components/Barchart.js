// src/components/BarChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa Chart desde 'chart.js/auto'

const BarChart = ({ incidents }) => {
    const chartRef = useRef(null); // Referencia al elemento canvas
    let myChart = null; // Variable para mantener la instancia del gráfico

    useEffect(() => {
        // Función para crear el gráfico
        const createChart = () => {
            const ctx = chartRef.current.getContext('2d');

            // Destruir el gráfico anterior si existe
            if (myChart) {
                myChart.destroy();
            }

            // Crear nuevo gráfico
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Abierta', 'En progreso', 'Cerrada'],
                    datasets: [{
                        label: 'Estado de Incidencias',
                        data: [
                            incidents.filter(incident => incident.status === 'Abierta').length,
                            incidents.filter(incident => incident.status === 'En progreso').length,
                            incidents.filter(incident => incident.status === 'Cerrada').length,
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        };

        // Llamar a la función para crear el gráfico
        createChart();

        // Limpiar el gráfico al desmontar el componente
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, [incidents]); // Escuchar cambios en 'incidents' para recrear el gráfico

    return (
        <div>
            <h2>Gráfico de Barras</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default BarChart;

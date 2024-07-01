// src/components/PriorityChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Importa Chart desde 'chart.js/auto'

const PriorityChart = ({ incidents }) => {
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
                    labels: ['Baja', 'Media', 'Alta'],
                    datasets: [{
                        label: 'Prioridad de Incidencias',
                        data: [
                            incidents.filter(incident => incident.priority === 'Baja').length,
                            incidents.filter(incident => incident.priority === 'Media').length,
                            incidents.filter(incident => incident.priority === 'Alta').length,
                        ],
                        backgroundColor: [
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 205, 86, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 99, 132, 1)',
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
            <h2>Análisis de Prioridades de Incidencias</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PriorityChart;

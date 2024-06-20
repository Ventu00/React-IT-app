// src/components/DashboardStats.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardStats = ({ incidents }) => {
    // Función para calcular el número de incidencias en cada estado
    const countByStatus = (status) => {
        return incidents.filter(incident => incident.status === status).length;
    };

    // Función para calcular el número de incidencias por prioridad
    const countByPriority = (priority) => {
        return incidents.filter(incident => incident.priority === priority).length;
    };

    // Calcular estadísticas
    const totalIncidents = incidents.length;
    const openIncidents = countByStatus('Abierta');
    const inProgressIncidents = countByStatus('En progreso');
    const closedIncidents = countByStatus('Cerrada');

    const lowPriorityIncidents = countByPriority('Baja');
    const mediumPriorityIncidents = countByPriority('Media');
    const highPriorityIncidents = countByPriority('Alta');

    return (
        <Container>
            <h2>Estadísticas del Tablero</h2>
            <Row>
                <Col>
                    <ul>
                        <li>Total de Incidencias: {totalIncidents}</li>
                        <li>Incidencias Abiertas: {openIncidents}</li>
                        <li>Incidencias en Progreso: {inProgressIncidents}</li>
                        <li>Incidencias Cerradas: {closedIncidents}</li>
                    </ul>
                </Col>
            </Row>
            <h3>Por Prioridad:</h3>
            <Row>
                <Col>
                    <ul>
                        <li>Prioridad Baja: {lowPriorityIncidents}</li>
                        <li>Prioridad Media: {mediumPriorityIncidents}</li>
                        <li>Prioridad Alta: {highPriorityIncidents}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardStats;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faChartPie, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

const DashboardStats = ({ incidents }) => {
    const countByStatus = (status) => incidents.filter(incident => incident.status === status).length;
    const countByPriority = (priority) => incidents.filter(incident => incident.priority === priority).length;
    const countByCategory = (category) => incidents.filter(incident => incident.category === category).length;
    const countByReportMethod = (reportMethod) => incidents.filter(incident => incident.reportMethod === reportMethod).length;
    const countByBusinessPriority = (businessPriority) => incidents.filter(incident => incident.businessPriority === businessPriority).length;
    const countByDepartment = (department) => incidents.filter(incident => incident.department === department).length;

    const totalIncidents = incidents.length;
    const openIncidents = countByStatus('Abierta');
    const inProgressIncidents = countByStatus('En progreso');
    const closedIncidents = countByStatus('Cerrada');

    const lowPriorityIncidents = countByPriority('Baja');
    const mediumPriorityIncidents = countByPriority('Media');
    const highPriorityIncidents = countByPriority('Alta');

    const criticalBusinessIncidents = countByBusinessPriority('Crítica');
    const highBusinessIncidents = countByBusinessPriority('Alta');
    const mediumBusinessIncidents = countByBusinessPriority('Media');
    const lowBusinessIncidents = countByBusinessPriority('Baja');

    const categories = ['Hardware', 'Software', 'Red'];
    const reportMethods = ['Email', 'Teléfono', 'En persona'];
    const departments = ['IT', 'Facturación', 'Ventas', 'Marketing', 'RRHH'];

    return (
        <Container>
            <h1 className="mb-4">Resumen</h1>

            <h4>Estadísticas generales</h4>
            <Row className="mb-4">
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faClipboardList} size="lg" />
                        <p>Total Incidencias</p>
                        <span>{totalIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faTasks} size="lg" />
                        <p>Abiertas</p>
                        <span>{openIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faChartPie} size="lg" />
                        <p>Cerradas</p>
                        <span>{closedIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faChartPie} size="lg" />
                        <p>En Progreso</p>
                        <span>{inProgressIncidents}</span>
                    </div>
                </Col>
            </Row>

            <h4>Estadísticas por prioridad</h4>
            <Row className="mb-4">
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faTasks} size="lg" />
                        <p>Baja</p>
                        <span>{lowPriorityIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faTasks} size="lg" />
                        <p>Media</p>
                        <span>{mediumPriorityIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faTasks} size="lg" />
                        <p>Alta</p>
                        <span>{highPriorityIncidents}</span>
                    </div>
                </Col>
            </Row>

            <h4>Estadísticas por prioridad del negocio</h4>
            <Row className="mb-4">
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faChartPie} size="lg" />
                        <p>Crítica</p>
                        <span>{criticalBusinessIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faChartPie} size="lg" />
                        <p>Alta</p>
                        <span>{highBusinessIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faChartPie} size="lg" />
                        <p>Media</p>
                        <span>{mediumBusinessIncidents}</span>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="statistic-item">
                        <FontAwesomeIcon icon={faChartPie} size="lg" />
                        <p>Baja</p>
                        <span>{lowBusinessIncidents}</span>
                    </div>
                </Col>
            </Row>

            <h4>Estadísticas por categoría</h4>
            <Row className="mb-4">
                {categories.map(category => (
                    <Col key={category} xs={6} sm={4} md={2}>
                        <div className="statistic-item">
                            <FontAwesomeIcon icon={faTasks} size="lg" />
                            <p>{category}</p>
                            <span>{countByCategory(category)}</span>
                        </div>
                    </Col>
                ))}
            </Row>

            <h4>Estadísticas por método de reporte</h4>
            <Row className="mb-4">
                {reportMethods.map(method => (
                    <Col key={method} xs={6} sm={4} md={2}>
                        <div className="statistic-item">
                            <FontAwesomeIcon icon={faTasks} size="lg" />
                            <p>{method}</p>
                            <span>{countByReportMethod(method)}</span>
                        </div>
                    </Col>
                ))}
            </Row>

            <h4>Estadísticas por departamento</h4>
            <Row className="mb-4">
                {departments.map(department => (
                    <Col key={department} xs={6} sm={4} md={2}>
                        <div className="statistic-item">
                            <FontAwesomeIcon icon={faUsers} size="lg" />
                            <p>{department}</p>
                            <span>{countByDepartment(department)}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DashboardStats;

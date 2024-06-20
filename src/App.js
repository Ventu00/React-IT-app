import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IncidentList from './components/IncidentList';
import NewIncidentForm from './components/NewIncidentForm';
import DashboardStats from './components/DashboardStats';
import BarChart from './components/Barchart';
import './App.css'; // Este archivo es opcional para estilos locales

const App = () => {
    const [incidents, setIncidents] = useState([]);

    const handleCreateIncident = (newIncident) => {
        setIncidents([...incidents, newIncident]);
    };

    const handleUpdateStatus = (id, newStatus) => {
        const updatedIncidents = incidents.map(incident =>
            incident.id === id ? { ...incident, status: newStatus } : incident
        );
        setIncidents(updatedIncidents);
    };

    return (
        <div className="App">
            <Container fluid className=" text-light min-vh-100 py-4 appCont">
                <h1 className="mb-4 text-white text-center">Tablero de Estado de Incidencias</h1>
                <Row className="justify-content-md-center">
                <Col md={5} className="custom-column-style">
                      <div className="p-3  rounded  mt-4 newTask-container">
                          <NewIncidentForm onCreateIncident={handleCreateIncident} />
                      </div>
                      <div className="p-3  rounded  mt-4 dashboardCont">
                          <DashboardStats incidents={incidents} />
                      </div>
                      
                  </Col>

                    <Col md={5} className="custom-column-style">
                    
                        <div className="p-3  rounded mt-4 chartCont">
                            <BarChart incidents={incidents} />
                        </div>
                        <div className="p-3  rounded listCont">
                            <IncidentList incidents={incidents} onUpdateStatus={handleUpdateStatus} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;

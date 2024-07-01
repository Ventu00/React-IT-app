import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css'; // Importamos el archivo CSS para aplicar estilos

const IncidentList = ({ incidents, onUpdateStatus }) => {
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal
    const [selectedIncident, setSelectedIncident] = useState(null); // Estado para almacenar la incidencia seleccionada

    const handleStatusUpdate = (id, newStatus) => {
        onUpdateStatus(id, newStatus);
    };

    const generateReport = (incident) => {
        setSelectedIncident(incident); // Guardar la incidencia seleccionada
        setShowModal(true); // Mostrar el modal al generar el informe
    };

    const handleCloseModal = () => {
        setShowModal(false); // Función para cerrar el modal
    };

    return (
        <div className="incident-list-container">
            <h2 className="incident-list-title">Listado de Incidencias</h2>
            <ul className="incident-list">
                {incidents.map(incident => (
                    <li key={incident.id} className="incident-item">
                        <div className="incident-details">
                            <span className="incident-title">{incident.title}</span> - <span className="incident-status">{incident.status}</span> |
                            <span className="incident-field"> Asignado a:</span> {incident.assignedTo} |
                            <span className="incident-field"> Prioridad:</span> {incident.priority} |
                            <span className="incident-field"> Creada el:</span> {new Date(incident.createdAt).toLocaleDateString()}
                        </div>
                        <div className="incident-actions">
                            <button
                                className="status-button in-progress-button"
                                onClick={() => handleStatusUpdate(incident.id, 'En progreso')}
                            >
                                En progreso
                            </button>
                            <button
                                className="status-button closed-button"
                                onClick={() => handleStatusUpdate(incident.id, 'Cerrada')}
                            >
                                Cerrada
                            </button>
                            <button
                                className="info-button"
                                onClick={() => generateReport(incident)}
                            >
                                Info
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Modal para mostrar el informe */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Informe de Incidencia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedIncident && (
                        <div>
                            <p><strong>Título:</strong> {selectedIncident.title}</p>
                            <p><strong>Descripción:</strong> {selectedIncident.description}</p>
                            <p><strong>Prioridad:</strong> {selectedIncident.priority}</p>
                            <p><strong>Asignado a:</strong> {selectedIncident.assignedTo}</p>
                            <p><strong>Estado:</strong> {selectedIncident.status}</p>
                            <p><strong>Fecha de Creación:</strong> {new Date(selectedIncident.createdAt).toLocaleDateString()}</p>
                            <p><strong>Ubicación:</strong> {selectedIncident.location}</p>
                            <p><strong>Método de Reporte:</strong> {selectedIncident.reportMethod}</p>
                            <p><strong>Usuario Afectado:</strong> {selectedIncident.affectedUser}</p>
                            <p><strong>Prioridad del Negocio:</strong> {selectedIncident.businessPriority}</p>
                            <p><strong>Departamento/Área:</strong> {selectedIncident.department}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default IncidentList;

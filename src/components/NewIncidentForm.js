import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../App.css'; // Este archivo es opcional para estilos locales

const NewIncidentForm = ({ onCreateIncident }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Baja');
    const [assignedTo, setAssignedTo] = useState('');
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [location, setLocation] = useState('');
    const [reportMethod, setReportMethod] = useState('');
    const [affectedUser, setAffectedUser] = useState('');
    const [businessPriority, setBusinessPriority] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !assignedTo) return;

        const newIncident = {
            id: Date.now(),
            title,
            description,
            priority,
            assignedTo,
            category,
            deadline,
            location,
            reportMethod,
            affectedUser,
            businessPriority,
            department,
            status: 'Abierta',
            createdAt: new Date().toISOString(),
        };

        onCreateIncident(newIncident);

        // Limpiar campos después de crear la incidencia
        setTitle('');
        setDescription('');
        setPriority('Baja');
        setAssignedTo('');
        setCategory('');
        setDeadline('');
        setLocation('');
        setReportMethod('');
        setAffectedUser('');
        setBusinessPriority('');
        setDepartment('');
    };

    // Listas de opciones para categorías y métodos de reporte
    const categoryOptions = ['Hardware', 'Software', 'Red', 'Otro'];
    const reportMethodOptions = ['Email', 'Teléfono', 'En persona', 'Portal web'];

    return (
        <div className="form-container">
            <h2>Nueva Incidencia</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formTitle">
                            <Form.Label className="form-label">Título:</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="custom-input"
                                style={{ maxWidth: '100%' }}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formPriority">
                            <Form.Label className="form-label">Prioridad:</Form.Label>
                            <Form.Control
                                as="select"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="custom-select"
                            >
                                <option value="Baja">Baja</option>
                                <option value="Media">Media</option>
                                <option value="Alta">Alta</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={12}>
                        <Form.Group controlId="formDescription">
                            <Form.Label className="form-label">Descripción:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="custom-textarea"
                                style={{ maxWidth: '100%' }}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formAssignedTo">
                            <Form.Label className="form-label">Asignado a:</Form.Label>
                            <Form.Control
                                type="text"
                                value={assignedTo}
                                onChange={(e) => setAssignedTo(e.target.value)}
                                className="custom-input"
                                style={{ maxWidth: '100%' }}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formCategory">
                            <Form.Label className="form-label">Categoría:</Form.Label>
                            <Form.Control
                                as="select"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="custom-select"
                            >
                                <option value="">Seleccionar...</option>
                                {categoryOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formDeadline">
                            <Form.Label className="form-label">Fecha Límite de Resolución:</Form.Label>
                            <Form.Control
                                type="date"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                className="custom-input"
                                style={{ maxWidth: '100%' }}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formLocation">
                            <Form.Label className="form-label">Ubicación:</Form.Label>
                            <Form.Control
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="custom-input"
                                style={{ maxWidth: '100%' }}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formReportMethod">
                            <Form.Label className="form-label">Medio de Reporte:</Form.Label>
                            <Form.Control
                                as="select"
                                value={reportMethod}
                                onChange={(e) => setReportMethod(e.target.value)}
                                className="custom-select"
                            >
                                <option value="">Seleccionar...</option>
                                {reportMethodOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formAffectedUser">
                            <Form.Label className="form-label">Usuario Afectado:</Form.Label>
                            <Form.Control
                                type="text"
                                value={affectedUser}
                                onChange={(e) => setAffectedUser(e.target.value)}
                                className="custom-input"
                                style={{ maxWidth: '100%' }}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group controlId="formBusinessPriority">
                            <Form.Label className="form-label">Prioridad del Negocio:</Form.Label>
                            <Form.Control
                                as="select"
                                value={businessPriority}
                                onChange={(e) => setBusinessPriority(e.target.value)}
                                className="custom-select"
                            >
                                <option value="Baja">Baja</option>
                                <option value="Media">Media</option>
                                <option value="Alta">Alta</option>
                                <option value="Crítica">Crítica</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="formDepartment">
                            <Form.Label className="form-label">Departamento/Área:</Form.Label>
                            <Form.Control
                                as="select"
                                value={department}
                                onChange={(e) => setDepartment(e.target.value)}
                                className="custom-select"
                            >

                                <option value="IT">IT</option>
                                <option value="Facturación">Facturación</option>
                                <option value="Ventas">Ventas</option>
                                <option value="Marketing">Marketing</option>
                                <option value="RRHH">RRHH</option>

                                </Form.Control>

                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <button type="submit" className="submit-buttons">
                            Crear Incidencia
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default NewIncidentForm;

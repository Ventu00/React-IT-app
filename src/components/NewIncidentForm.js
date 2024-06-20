// src/components/NewIncidentForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; // Importamos los componentes de formularios y botones de React Bootstrap
import '../App.css'; // Este archivo es opcional para estilos locales

const NewIncidentForm = ({ onCreateIncident }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Baja'); // Estado inicial de prioridad
    const [assignedTo, setAssignedTo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación de campos
        if (!title || !description || !assignedTo) return;

        // Crear objeto de incidencia
        const newIncident = {
            id: Date.now(), // Id único temporal (puedes cambiarlo por algo más robusto)
            title,
            description,
            priority,
            assignedTo,
            status: 'Abierta', // Estado inicial
            createdAt: new Date().toISOString(),
        };

        // Llamar a la función para crear incidencia en el componente padre
        onCreateIncident(newIncident);

        // Limpiar campos después de crear la incidencia
        setTitle('');
        setDescription('');
        setPriority('Baja');
        setAssignedTo('');
    };

    return (
        <div>
            <h2>Nueva Incidencia</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
                    <Form.Label>Título:</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formPriority">
                    <Form.Label>Prioridad:</Form.Label>
                    <Form.Control as="select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="Baja">Baja</option>
                        <option value="Media">Media</option>
                        <option value="Alta">Alta</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formAssignedTo">
                    <Form.Label>Asignado a:</Form.Label>
                    <Form.Control type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit">
                    Crear Incidencia
                </Button>
            </Form>
        </div>
    );
};

export default NewIncidentForm;

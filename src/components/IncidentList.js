// src/components/IncidentList.js
import React from 'react';

const IncidentList = ({ incidents, onUpdateStatus }) => {
    const handleStatusUpdate = (id, newStatus) => {
        onUpdateStatus(id, newStatus);
    };

    return (
        <div>
            <h2>Listado de Incidencias</h2>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        {incident.title} - {incident.status}
                        <button onClick={() => handleStatusUpdate(incident.id, 'En progreso')}>
                            Marcar como En progreso
                        </button>
                        <button onClick={() => handleStatusUpdate(incident.id, 'Cerrada')}>
                            Marcar como Cerrada
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncidentList;

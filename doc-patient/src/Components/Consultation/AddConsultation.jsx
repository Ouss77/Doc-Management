import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PatientSearch from './PatientSearch';
import QueueDisplay from './QueueDisplay';
import VisitsChart from './VisitsChart'; // Import your VisitsChart component

function AddConsultation() {
    const [queue, setQueue] = useState([]);
    const [showQueue, setShowQueue] = useState(true); // Initially show Queue

    useEffect(() => {
        const storedQueue = localStorage.getItem('queue');
        if (storedQueue) {
            setQueue(JSON.parse(storedQueue));
        }
    }, []);

    const handleAddToQueue = async (patient) => {
        const newQueueItem = { ...patient, addedTime: new Date().toISOString() };
        const newQueue = [...queue, newQueueItem];
        setQueue(newQueue);
        localStorage.setItem('queue', JSON.stringify(newQueue)); // Save updated queue to local storage

        try {
            const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
            await axios.post(`${apiUrl}api/addVisit`, {
                nom: patient.nom,
                prenom: patient.prenom
            });
            console.log('Visit added successfully');
        } catch (error) {
            console.error('Failed to register visit', error);
        }
    };

    const sortedQueue = queue.sort((a, b) => new Date(a.addedTime) - new Date(b.addedTime));

    return (
        <div className="max-w-6xl mx-auto px-4 py-24 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold text-gray-800">
                    Add Patient to Consultation Queue
                </h1>
                <button
                    className="bg-blue-500 text-white font-semibold px-4 py-2 rounded"
                    onClick={() => setShowQueue(!showQueue)}
                >
                    {showQueue ? 'Show Visits Chart' : 'Show Queue'}
                </button>
            </div>
            {/* Toggle between PatientSearch and QueueDisplay based on showQueue */}
            {showQueue ? (
                <div>
                    <PatientSearch onAddToQueue={handleAddToQueue} />
                    <QueueDisplay queue={sortedQueue} setQueue={setQueue} />
                </div>
            ) : (
                <VisitsChart />
            )}
        </div>
    );
}

export default AddConsultation

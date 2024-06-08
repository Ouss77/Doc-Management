import  { useState, useEffect } from 'react';
import axios from 'axios';
import PatientSearch from './PatientSearch';
import QueueDisplay from './QueueDisplay';

function AddConsultation() {
    const [queue, setQueue] = useState([]);

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
        <div className="max-w-4xl mx-auto px-4 py-24 bg-white shadow-lg rounded-lg">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Add Patient to Consultation Queue</h1>
            <PatientSearch onAddToQueue={handleAddToQueue} />
            <QueueDisplay queue={sortedQueue} setQueue={setQueue} />
        </div>
    );
}


export default AddConsultation;

import axios from 'axios';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function QueueDisplay({ queue, setQueue }) {
    const [error, setError] = useState('');

    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    const handleRemovePatient = async (nom, prenom) => {
        console.log(`Attempting to remove patient: ${nom} ${prenom}`);
        try {
            const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
            const deleteUrl = `${apiUrl}api/removeVisit?nom=${encodeURIComponent(nom)}&prenom=${encodeURIComponent(prenom)}`;
            await axios.delete(deleteUrl);
            const updatedQueue = queue.filter(item => item.nom !== nom || item.prenom !== prenom);
            setQueue(updatedQueue);
            localStorage.setItem('queue', JSON.stringify(updatedQueue)); // Save updated queue to local storage
            console.log('Visit removed successfully');
            setError(''); // Clear any previous errors on successful operation
            AOS.refresh();
        } catch (error) {
            console.error('Failed to remove visit', error);
            setError('Failed to remove visit. Please try again.');
        }
    };

    const today = new Date().toISOString().split('T')[0];
    const todayQueue = queue.filter(item => item.addedTime.startsWith(today));

    return (
        <div>
            {error && <p className="text-red-500">{error}</p>}
            <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Today's Queue</h2>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 text-left">Name</th>
                        <th className="py-2 px-4 text-left">Waiting Number</th>
                        <th className="py-2 px-4 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todayQueue.map((item, index) => (
                        <tr key={item._id + index}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                            className="hover:bg-gray-200">
                            <td className="py-2 px-4">{item.nom} {item.prenom}</td>
                            <td className="py-2 px-20 ordinal">{index + 1}</td>
                            <td className="py-2 px-4">
                                <button
                                    className="bg-red-500 text-white py-1 px-3 rounded"
                                    onClick={() => handleRemovePatient(item.nom, item.prenom)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default QueueDisplay;

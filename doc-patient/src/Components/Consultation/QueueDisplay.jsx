import React, { useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

function QueueDisplay({ queue, setQueue }) {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    const handleRemovePatient = async (id, nom, prenom) => {
        console.log(`Attempting to remove patient: ${nom} ${prenom}`);
        console.log(id);
        try {
            const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
            const deleteUrl = `${apiUrl}api/removeVisit?nom=${encodeURIComponent(nom)}&prenom=${encodeURIComponent(prenom)}`;
            await axios.delete(deleteUrl);
            setQueue(queue.filter(item => item._id !== id));
            console.log('Visit removed successfully');
            AOS.refresh();
        } catch (error) {
            console.error('Failed to remove visit', error);
        }
    };
    
    const today = new Date().toISOString().split('T')[0];
    const todayQueue = queue.filter(item => item.dateVisited?.startsWith(today));  // Optional chaining here

    return (
        <div>
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
                                    onClick={() => handleRemovePatient(item._id, item.nom, item.prenom)}
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

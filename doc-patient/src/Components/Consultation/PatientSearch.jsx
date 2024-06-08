/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

function PatientSearch({ onAddToQueue }) {
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
                const response = await axios.get(`${apiUrl}api/users`);
                setPatients(response.data);
            } catch (error) {
                console.error('Failed to fetch patients', error);
            }
        };
        fetchPatients();
    }, []);

    const handleSearchChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        if (value) {
            const filtered = patients.filter(patient =>
                patient.nom.toLowerCase().includes(value) || patient.prenom.toLowerCase().includes(value)
            );
            setFilteredPatients(filtered);
        } else {
            setFilteredPatients([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search patients by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 w-full border rounded-md mb-4"
            />
            {filteredPatients.length > 0 && (
                <table className="w-full mb-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map((patient) => (
                            <tr key={patient._id} className="hover:bg-gray-200">
                                <td className="py-2 px-4">{patient.nom} {patient.prenom}</td>
                                <td className="py-2 px-4">
                                    <button
                                        className="bg-blue-500 text-white py-1 px-3 rounded"
                                        onClick={() => onAddToQueue(patient)}
                                    >
                                        Add to Queue
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default PatientSearch;

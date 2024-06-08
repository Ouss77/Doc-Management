import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientSearchOr = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPatients, setFilteredPatients] = useState([]);

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
        `${patient.nom} ${patient.prenom}`.toLowerCase().includes(value)
      );
      setFilteredPatients(filtered);
    } else {
      setFilteredPatients([]);
    }
  };

  const handleSelectPatient = (patient) => {
    onSelectPatient(patient);
    setSearchTerm('');
    setFilteredPatients([]);
  };

  return (
    <div className="w-full max-w-2xl mb-4">
      <label
        htmlFor="patient-search"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Search for Patient
      </label>
      <input
        type="text"
        id="patient-search"
        placeholder="Search patients by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 w-full border rounded-md mb-4"
      />
      {filteredPatients.length > 0 && (
        <ul className="border border-gray-300 rounded mt-2">
          {filteredPatients.map(patient => (
            <li
              key={patient.id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectPatient(patient)}
            >
              {patient.nom} {patient.prenom}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientSearchOr;

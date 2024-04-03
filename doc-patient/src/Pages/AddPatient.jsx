import axios from 'axios';
import { useState } from 'react';

function AddPatient() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [userData, setUserData] = useState({
    fullName: '',
    telephone: '',
    status: '',
    visitDate: '',
    description: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = new Date(userData.visitDate).toISOString().split('T')[0];
      console.log('Formatted Date:', formattedDate); // Debugging log

    
    // Create a new userData object with the formatted date
    const newData = {
      ...userData,
      visitDate: formattedDate
    };
      await axios.post('http://localhost:3000/api/users', newData);
      console.log('User added successfully');
      setShowSuccessAlert(true);
      setUserData({
        fullName: '',
        telephone: '',
        status: '',
        visitDate: '',
        description: ''
      });

    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="bg-gray-50 h-screen flex items-center justify-center">
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      {showSuccessAlert && (
          <div className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Success alert!</span> User added successfully.
            </div>
          </div>
        )}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-full-name">
              Full Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-full-name" type="text" name="fullName" value={userData.fullName} onChange={handleChange} placeholder="Jane Doe" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-telephone">
              Telephone
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-telephone" type="text" name="telephone" value={userData.telephone} onChange={handleChange} placeholder="Enter telephone number" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-status">
              Status
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-status" type="text" name="status" value={userData.status} onChange={handleChange} placeholder="Enter status" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-visit-date">
              Visit Date
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-visit-date" type="date" name="visitDate" value={userData.visitDate} onChange={handleChange} />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
              Description
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" type="text" name="description" value={userData.description} onChange={handleChange} placeholder="Enter description" />
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Add User
        </button>
      </form>
    </div>

  );
}

export default AddPatient;

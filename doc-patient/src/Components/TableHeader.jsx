import { useState } from "react";

import Dashboard from "./Dashboard";
import AddPatient from "../Pages/AddPatient";

// eslint-disable-next-line react/prop-types
function TableHeader({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayComponent, setDisplayComponent] = useState(null); // State to manage which component to display

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call onSearch with the new query
  };

  const exportData = () => {
    // Create a CSV content string
    const csvContent = "data:text/csv;charset=utf-8," + users.map(user => {
      // Format the visitDate to "yyyy-mm-dd"
      const formattedVisitDate = new Date(user.visitDate).toISOString().split('T')[0];
      // Return the formatted user data as a CSV row
      return Object.values({ ...user, visitDate: formattedVisitDate }).join(',');
    }).join('\n');
  
    // Create a link element
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users.csv");
  
    // Simulate click on the link to trigger download
    document.body.appendChild(link);
    link.click();
  
    // Clean up
    document.body.removeChild(link);
  };
  const handleExploreData = () => {
    // Set displayComponent state to 'Dashboard'
    setDisplayComponent('Dashboard');
  };

  const handleAddPatient = () => {
    // Set displayComponent state to 'AddPatient'
    setDisplayComponent('AddPatient');
  };

  return (
    <div>
      <section className="flex items-center dark:bg-gray-900">
        <div className="w-2/3 max-w-screen-xl px-4 mx-auto lg:px-12 p-20">
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex-row items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
              <div>
                <h5 className="mr-3 font-semibold dark:text-white">
                  Flowbite Users
                </h5>
                <p className="text-gray-500 dark:text-gray-400">
                  Manage Patients
                </p>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={handleAddPatient} // Call handleAddPatient when "Ajouter Patient" button is clicked
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-blue-500 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  focus:outline-none  mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 mr-2 -ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  Ajouter Patient
                </button>
                <button
                  type="button"
                  onClick={exportData}
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 focus:outline-none mr-2"
                >
                  Export Data
                </button>
                <button
                  type="button"
                  onClick={handleExploreData} // Call handleExploreData when "Explore Data" button is clicked
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  Explore Data
                </button>
              </div>
              <div>
                <input
                  type="text"
                  value={searchQuery}
                  placeholder="Chercher par nom"
                  onChange={handleSearchChange} // Call handleSearchChange on input change
                  className="border border-gray-300 p-2 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Conditionally render components based on displayComponent state */}
      {displayComponent === 'AddPatient' && <AddPatient />}
      {displayComponent === 'Dashboard' && <Dashboard />}
    </div>
  );
}

export default TableHeader;

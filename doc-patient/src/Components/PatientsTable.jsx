import React, { useState } from "react";
import Pagination from "react-js-pagination";
import EditForm from "./EditForm";

function PatientsTable({ filteredUsers, handleDelete }) {
  const [activePage, setActivePage] = useState(1);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [editingUserData, setEditingUserData] = useState(null);

  const itemsPerPage = 10; // Number of items per page

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  // Get current users based on active page
  const indexOfLastUser = activePage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Function to handle the edit button click
  const handleEditClick = (user) => {
    setEditingUserData(user);
    setDisplayEditForm(true);
  };

  const handleEditComplete = () => {
    setDisplayEditForm(false);
    setEditingUserData(null);
    window.location.reload(); // Refresh the page

  };

  return (
    <div className="relative">
      {displayEditForm && editingUserData && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <EditForm
            userId={editingUserData._id}
            onCancel={() => handleEditComplete()} // Cancel function can also be handled from the EditForm itself
            userData={editingUserData}
            onEditComplete={() => handleEditComplete()} // Inform the parent component when editing is complete
          />
        </div>
      )}
      <div className="relative shadow-md sm:rounded-lg sm:mx-56 mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nom
              </th>
              <th scope="col" className="px-6 py-3">
                Prenom
              </th>
              <th scope="col" className="px-6 py-3">
                Telephone
              </th>
              <th scope="col" className="px-6 py-3">
                Date de Naissance
              </th>
              <th scope="col" className="px-6 py-3">
                mutuelle
              </th>
              <th scope="col" className="px-6 py-3">
                Motif
              </th>
              <th scope="col" className="px-6 py-3">
                Date de Visite
              </th>
              <th scope="col" className="px-6 py-3">
                Diagnostic
              </th>
              <th scope="col" className="px-6 py-3">
                Traitement
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.nom}
                </td>
                <td className="px-6 py-4">{user.prenom}</td>
                <td className="px-6 py-4">{user.tel}</td>
                <td className="px-6 py-4">{user.dateNaissance}</td>
                <td className="px-6 py-4">{user.mutuelle}</td>
                <td className="px-6 py-4">{user.motif}</td>
                <td className="px-6 py-4">{user.dateVisite}</td>                
                <td className="px-6 py-4">{user.diagnostic}</td>
                <td className="px-6 py-4">{user.traitement}</td>

                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={() => handleEditClick(user)} // Pass the entire user object
                  >
                    Modifier
                  </a>
                  <span className="mx-2">|</span>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleDelete(user._id)}
                  >
                    Suprimer
                  </a>
                  <span className="mx-2">|</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={filteredUsers.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="inline-block"
          linkClass="px-3 py-1 mx-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 hover:text-gray-900"
          activeLinkClass="px-3 py-1 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          prevPageText="Previous"
          nextPageText="Next"
          firstPageText="First"
          lastPageText="Last"
        />
      </div>
    </div>
  );
}

export default PatientsTable;

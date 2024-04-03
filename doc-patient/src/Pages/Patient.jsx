import { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import Pagination from "react-js-pagination";
import TableHeader from "../Components/TableHeader";
import Dashboard from "../Components/Dashboard";
import AddPatient from "./AddPatient";

function Patient() {
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [displayComponent, setDisplayComponent] = useState(null); // State to manage which component to display
  const itemsPerPage = 10; // Number of items per page

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${itemId}`);
      console.log("Item deleted successfully");
      setUsers(users.filter((user) => user._id !== itemId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleSearch = (query) => {
    const filtered = users.filter((user) =>
      user.fullName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    // Fetch user data when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data); // Update users state with fetched data
        setFilteredUsers(response.data); // Initialize filtered users with all users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  // Get current users based on active page
  const indexOfLastUser = activePage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="bg-gray-50 p-10">
      <Header />
      <TableHeader users={users} onSearch={handleSearch} />

      {/* Conditionally render different components based on state */}
      {displayComponent === 'AddPatient' && <AddPatient />}
      {displayComponent === 'Dashboard' && <Dashboard />}

      <div className="overflow-x-auto">
        <div className="relative shadow-md sm:rounded-lg sm:mx-56">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nom Complet
                </th>
                <th scope="col" className="px-6 py-3">
                  Telephone
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Visite Date
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
                    {user.fullName}
                  </td>
                  <td className="px-6 py-4">{user.telephone}</td>
                  <td className="px-6 py-4">{user.status}</td>
                  <td className="px-6 py-4">{user.visitDate}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => setDisplayComponent('AddPatient')} // Set displayComponent state to 'AddPatient' when clicked
                    >
                      Ajouter Patient
                    </a>
                    <span className="mx-2">|</span>
                    <a onClick={() => { handleDelete(user._id) }}
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </a>
                    <span className="mx-2">|</span>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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

export default Patient;

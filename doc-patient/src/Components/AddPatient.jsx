import { useState } from "react";
import axios from "axios";
import Form from "./Form";

function AddPatient() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    adresse: "",
    tel: "",
    CIN: ""
  });

const handleChange = (event) => {
  const { name, value } = event.target;
  setUserData({ ...userData, [name]: value });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = new Date(userData.dateNaissance)
        .toISOString()
        .split("T")[0];
      console.log("Formatted Date:", formattedDate); // Debugging log

      const newData = {
        ...userData,
        visitDate: formattedDate,
      };
      const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

      await axios.post(`${apiUrl}api/users`, newData);
      console.log("User added successfully");
      setShowSuccessAlert(true);
      setUserData({
        nom: "",
        prenom: "",
        dateNaissance: "",
        mutuelle: "",
        adresse: "",
        tel: "",
        CIN: ""

      });
      window.location.reload(); // Refresh the page

    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <Form
        userData={userData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        showSuccessAlert={showSuccessAlert}
      />
    </div>
  );
}

export default AddPatient;

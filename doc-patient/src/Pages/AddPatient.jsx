import { useState } from "react";
import axios from "axios";
import Form from "../Components/Form";

function AddPatient() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [userData, setUserData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    mutuelle: "",
    adresse: "",
    tel: "",
    motif: "",
    dateVisited: "",
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
      await axios.post("http://localhost:3000/api/users", newData);
      console.log("User added successfully");
      setShowSuccessAlert(true);
      setUserData({
        nom: "",
        prenom: "",
        dateNaissance: "",
        mutuelle: "",
        adresse: "",
        tel: "",
        motif: "",
        dateVisited: "",
        diagnostic: "",
        traitement: "",
      });
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

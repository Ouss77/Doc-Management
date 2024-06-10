// PDFPreview.jsx
import React, { useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import PrescriptionDocument from "./PrescriptionDocument";
const PDFPreview = () => {
  // Dummy data for preview purposes
  const patientInfo = {
    name: "John Doe",
    maladie: "Flu",
    prescription: "Rest and drink plenty of fluids."
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">PDF Preview</h1>
      <PDFViewer width="600" height="800" className="border border-gray-300">
        <PrescriptionDocument patientInfo={patientInfo} />
      </PDFViewer>
    </div>
  );
};

export default PDFPreview;

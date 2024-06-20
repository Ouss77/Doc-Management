import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PrescriptionDocument from './PrescriptionDocument';
import PatientSearchOr from './PatientSearchOr';

const PrescriptionForm = ({ doctorInfo }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const [patientInfo, setPatientInfo] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setPatientInfo(data);
    setIsSubmitted(true);
  };

  const handleSelectPatient = (patient) => {
    const fullName = `${patient.nom} ${patient.prenom}`;
    setValue('name', fullName);
    setPatientInfo({ ...patient, name: fullName });
    setIsSubmitted(false);
  };

  return (
    <div className="container mx-auto p-4 mt-20 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img className="mb-4" src="headdoc.png" alt="Header Image" />
        <PatientSearchOr onSelectPatient={handleSelectPatient} />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Nom de patient
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 border border-gray-300 rounded"
              {...register('name', { required: true })}
              defaultValue={watch('name')}
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="maladie"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Maladie
            </label>
            <input
              type="text"
              id="maladie"
              className="block w-full p-2 border border-gray-300 rounded"
              {...register('maladie', { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="prescription"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Prescription
            </label>
            <textarea
              id="prescription"
              className="block w-full p-2 border border-gray-300 rounded"
              {...register('prescription', { required: true })}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 mt-10 bg-blue-600 text-white rounded"
          >
            Generate Prescription
          </button>
        </form>

        {isSubmitted && (
          <div className="mt-4">
            <PDFDownloadLink
              document={<PrescriptionDocument patientInfo={patientInfo} />}
              fileName="prescription.pdf"
            >
              {({ loading }) =>
                loading ? (
                  <button className="px-4 py-2 bg-gray-600 text-white rounded">
                    Loading...
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-green-600 text-white rounded">
                    Download PDF
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrescriptionForm;

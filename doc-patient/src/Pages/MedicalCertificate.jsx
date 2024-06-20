import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

const MedicalCertificate = () => {

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white shadow-md rounded-md border">
      <header className="flex justify-between items-center mb-8">
        <div className="text-left w-56">
          <h1 className="text-xl font-bold w-screen">Docteur SASSOUR Mohammed</h1>
          <p className="text-sm">Ancien Médecin militaire lt Colonel</p>
          <p className="text-sm">Médecine Générale</p>
          <p className="text-sm">Médecine du sport</p>
          <p className="text-sm">Maladies sexuellement transmissibles</p>
          <p className="text-sm">N°2, 1er étage, angle Bdouvaud Mohamed V et Ibn Battouta, Guercif</p>
          <p className="text-sm">Tel: 0672231406 / 0661255659</p>
        </div>
        <FontAwesomeIcon icon={faStethoscope} className="text-black text-8xl mx-4" />
        <div className="text-right w-52">
          <h1 className="text-xl font-bold">الدكتور ساسور محمد</h1>
          <p className="text-sm">طبيب عسكري لـ كولونيل سابقًا</p>
          <p className="text-sm">الطب العام</p>
          <p className="text-sm">طب الرياضة</p>
          <p className="text-sm">الأمراض المنقولة جنسياً</p>
          <p className="text-sm">ن°2، الطابق الأول، زاوية بدوفواد محمد الخامس وإبن بطوطة، جرسيف</p>
          <p className="text-sm">الهاتف: 0672231406 / 0661255659</p>
        </div>
      </header>
      <div className="mb-4 text-right">
        <p className="font-bold text-center mb-14">GUERCIF LE <span className="underline">02/06/2024</span></p>
      </div>
      <h2 className="text-xl font-bold text-center mb-4">CERTIFICAT MEDICAL</h2>
      <div className='mx-16'>
      <p className="mb-4">Je soussigné, SASSOUR MOHAMMED, docteur en médecine certifie avoir examiné ce jour le (la) nommé(e)</p>
      <p className="mb-4 font-bold text-lg underline">SASSOUR OUSSAMA</p>
      <p className="mb-4">CIN: <span className="font-bold">Z6199360</span></p>
      <p className="mb-4">Son état de santé nécessite un traitement médical et un repos de</p>
      <p className="mb-4 font-bold text-lg"><span className="underline">deux (02)</span> jours valables du <span className="underline">03/06/2024</span> au <span className="underline">04/06/2024</span> inclus sauf complications.</p>
      <p className="mb-8">Certificat établi à la demande de l’intéressé(e) pour servir et valoir ce que de doit.</p>
      </div>

    </div>
  );
}

export default MedicalCertificate;

import doc from '../assets/doc.jpg';

function Hero() {
  return (
    <div className="relative mt-16 sm:mt-0">
      <img src={doc} alt="Doctor" className="w-full" />

      <div className="absolute sm:top-0 top-10 w-1/2 sm:right-56 sm:w-full h-full sm:flex sm:flex-col sm:justify-center sm:items-center">
        <h1 className="text-blue-800 sm:text-4xl text-l font-bold mb-0 sm:mb-10">Bienvenue Chez Med Sassour</h1>
        <p className="text-blue-800 sm:text-lg text-sm">Médecin Généraliste Mohammed Sassour, Ex Militaire</p>
      </div>

      <div className="absolute sm:-bottom-20 left-0 w-full flex justify-center">
        <div className="flex flex-col sm:flex-row justify-between max-w-screen-lg sm:w-full">
          <div className="flex-1 bg-gradient-to-r from-blue-300 via-blue-20 to-blue-50 bg-opacity-20 shadow-lg p-4 rounded-lg mx-2 mb-4">
            <h2 className="text-gray-800 text-lg font-bold mb-2">LES JOURS DE TRAVAILLE</h2>
            <p className="text-gray-600">Lundi - Vendredi: <span className='float-right'> 9AM - 5PM</span></p>
            <p className="text-gray-600">Samedi: <span className='float-right'> 9AM - 1PM</span></p>
            <p className="text-gray-600">Dimanche: <span className='float-right mr-9'>Ferme</span></p>
          </div>
          
          <div className="flex-1 bg-gradient-to-r from-blue-300 via-blue-20 to-blue-50 bg-opacity-20 shadow-lg p-4 rounded-lg mx-2 mb-4">
            <h2 className="text-gray-800 text-lg font-bold mb-2">Contact Number</h2>
            <p className="text-gray-600">Secrétaire: <span className='float-right'>0661255699</span></p>
            <p className="text-gray-600">Fix-Cabinet: <span className='float-right'>0661255699</span></p>
            <p className="text-gray-600">Médecin: <span className='float-right'>0661255699</span></p>
          </div>

          <div className="flex-1 bg-gradient-to-r from-blue-300 via-blue-20 to-blue-50 bg-opacity-20 shadow-lg p-4 rounded-lg mx-2 mb-4">
            <h2 className="text-gray-800 text-lg font-bold mb-2">Address</h2>
            <p className="text-gray-600">Boulevard Mohammed 5, Rue 12, Immeuble: 23, Premier Etage. Maroc, Guercif</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

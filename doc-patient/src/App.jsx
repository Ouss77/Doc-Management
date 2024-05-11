import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Patient from './Pages/Patient';
import AddPatient from './Components/AddPatient';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />   {/* Default route for Home */}
        <Route path="/patient" element={<Patient />} />  {/* Route for Patient */}
        <Route path="/AddPatient" element={<AddPatient />} />  {/* Route for Patient */}
        <Route path="/Contact" element={<Contact />} />  {/* Route for Patient */}
        <Route path="/About" element={<About />} />  {/* Route for Patient */}
        <Route path="/Dash" element={<Dashboard />} />  {/* Route for Patient */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

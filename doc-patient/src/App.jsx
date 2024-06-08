import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Patient from './Pages/Patient';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Consultation from './Pages/Consultation';
import Login from './Pages/Login';
import { AuthProvider } from './Components/Login/AuthContext';
import PrivateRoute from './Components/Login/PrivateRoute';
import Ordonance from './Pages/Ordonance';

const App = () => {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />   
          <Route path="/Contact" element={<Contact />} />  
          <Route path="/About" element={<About />} />  
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/patient" element={<Patient />} />  
          <Route path="/Oradonance" element={<Ordonance />} />  
          <Route path="/Consultation" element={<Consultation />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
};

export default App;

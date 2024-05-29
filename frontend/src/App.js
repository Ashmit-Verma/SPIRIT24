
// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import Landing from './page/landing';
import Signup from './page/signup';
import Login from './page/login';
import Dashboard from './page/dashboard';
import OtpVerify from './page/otpverify';

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Simplified authentication check
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      </Routes>
    </Router>
  );
}

export default App;

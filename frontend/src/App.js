// <<<<<<< HEAD
// import Header from "./Pages/Signup/SignUp1";
// import Form from "./Pages/Signup/Form";
 


// =======
// import Header from "./components/header/header.js";
// import Hero from "./components/hero/hero.js";
// import Welcome from "./components/welcome/welcome";
// import Todaysevents from "./components/todaysevents/Todaysevents";
// import Footer from "./components/footer/footer.js";
// import Faq from "./components/FAQ/faq.js";
// >>>>>>> 6ed7f5004338ae8ef3db54d9667c9d42d243a374
  
// function App() {
//   return (
//     <div>
// <<<<<<< HEAD
//       <Header />
//       <Form />
      
// =======

//       <Header />  
//       <Hero/>
//       <Welcome/>
//       <Todaysevents/>
//       <Faq/>
//       <Footer/>
// >>>>>>> 6ed7f5004338ae8ef3db54d9667c9d42d243a374
      
//    </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './page/landing';
import Signup from './page/signup';
// import Login from './components/Login';
// import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;

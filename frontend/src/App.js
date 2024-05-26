import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import Welcome from "./components/welcome/welcome";
import Todaysevents from "./components/todaysevents/Todaysevents";
import Footer from "./components/footer/footer.js";
  
function App() {
  return (
    <div>

      <Header />  
      <Hero/>
      <Welcome/>
      <Todaysevents/>
      <Footer/>
      
   </div>
  );
}

export default App;

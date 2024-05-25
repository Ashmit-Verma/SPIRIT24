import Header from "./components/header/header.js";
import Hero from "./components/hero/hero.js";
import Welcome from "./components/welcome/welcome";
import Todaysevents from "./components/todaysevents/Todaysevents";
  
function App() {
  return (
    <div>

      <Header />  
      <Hero/>
      <Welcome/>
      <Todaysevents/>
      
   </div>
  );
}

export default App;

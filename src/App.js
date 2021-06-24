import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import Carousel from './Carousel';
import Apps from './Apps.js' // this component

function App() {
  return (
    <div className="App">
    <Navbar/>
    <About/>
        <p>Chaussure légère avec un style basket très tendances sans coutures intérieures pour protéger les pieds. </p>

    <Carousel/>
    <Apps/>  
    </div>
  );
}

export default App;

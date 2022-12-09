import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import bgImage from "./Component/background.jpg"

function App() {
  return (
    <div style={{backgroundImage:`url(${bgImage})`,height:"100vh"}}>
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;

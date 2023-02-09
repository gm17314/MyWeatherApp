import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import bgImage from "./Component/background.jpg"

function App() {
  return (
    <div className='main' style={{backgroundImage:`url(${bgImage})`}}>
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;

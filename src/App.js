import './App.css';
import Navbar from './Components/Navbar';
// import { Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Order from './Components/Order';
import About from './Components/About';
import Inventory from './Components/Inventory';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/order' element={<Order/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;

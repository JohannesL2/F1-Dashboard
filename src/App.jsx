import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DriverDashboard from "./pages/DriverDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RadioDashboard from "./pages/RadioDashboard";
import CarDashboard from "./pages/CarDashboard"

function App() {

  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/driver_dashboard" element={<DriverDashboard/>}/>
      <Route path="/radio_dashboard" element={<RadioDashboard/>}/>
      <Route path="/car_dashboard" element={<CarDashboard/>}/>
    </Routes>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DriverDashboard from "./pages/DriverDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/driver_dashboard" element={<DriverDashboard/>}/>
    </Routes>
    </div>
  )
}

export default App

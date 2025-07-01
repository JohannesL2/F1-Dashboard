import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DriverDashboard from "./pages/DriverDashboard";

function App() {

  return (
    <div>
    <h1 className="font-semibold text-3xl">🏎️F1 Dashboard</h1>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/driver_dashboard" element={<DriverDashboard/>}/>
    </Routes>
    </div>
  )
}

export default App

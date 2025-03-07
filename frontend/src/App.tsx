import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonantesTable from "./components/DonantesTable";
import BeneficiariosTable from "./components/BeneficiariosTable";
import DonacionesTable from "./components/DonacionesTable";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/donantes" element={<DonantesTable />} />
            <Route path="/beneficiarios" element={<BeneficiariosTable />} />
            <Route path="/donaciones" element={<DonacionesTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;




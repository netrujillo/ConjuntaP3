import { Menu } from "primereact/menu";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const items = [
    { 
      label: "Dashboard", 
      icon: "pi pi-chart-bar", 
      command: () => navigate("/dashboard") 
    },
    { 
      label: "Donantes", 
      icon: "pi pi-users", 
      command: () => navigate("/donantes") 
    },
    { label: "Beneficiarios", 
      icon: "pi pi-user", 
      command: () => navigate("/beneficiarios") 
    },
    { label: "Donaciones", 
      icon: "pi pi-box", 
      command: () => navigate("/donaciones") 
    },
  ];

  return <div className="sidebar">
    <h1>Menú</h1>
    <Menu model={items}/> 
    </div>
};

export default Sidebar;


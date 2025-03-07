import { useEffect, useState } from "react";
import { fetchAPI } from "../service/api";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import { Donacion } from "../types/types";

const Dashboard = () => {
  const [donaciones, setDonaciones] = useState<Donacion[]>([]);
  const [totalDonantes, setTotalDonantes] = useState(0);
  const [totalBeneficiarios, setTotalBeneficiarios] = useState(0);

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = async () => {
    try {
      const donacionesData = await fetchAPI("/donaciones");
      const donantesData = await fetchAPI("/donantes");
      const beneficiariosData = await fetchAPI("/beneficiarios");

      setDonaciones(donacionesData);
      setTotalDonantes(donantesData.length);
      setTotalBeneficiarios(beneficiariosData.length);
    } catch (error) {
      console.error("Error al cargar datos", error);
    }
  };

  // Contar donaciones según estado
  const totalRealizadas = donaciones.length;
  const totalPendientes = donaciones.filter(d => d.estado === "DISPONIBLE").length;
  const totalExitosas = donaciones.filter(d => d.estado === "ENTREGADA").length;

  // Datos para el gráfico de donaciones
  const datosDonaciones = {
    labels: ["Realizadas", "Pendientes", "Exitosas"],
    datasets: [
      {
        data: [totalRealizadas, totalPendientes, totalExitosas],
        backgroundColor: ["#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Datos para el impacto social
  const totalAlimentos = donaciones.reduce((sum, d) => sum + d.cantidad, 0);
  const datosImpacto = {
    labels: ["Alimentos Redistribuidos", "Beneficiarios Impactados"],
    datasets: [
      {
        data: [totalAlimentos, totalBeneficiarios],
        backgroundColor: ["#FF6384", "#FF9F40"],
      },
    ],
  };

  return (
    <div>
      <h2>DASHBOARD</h2>
      <div className="dashboard-grid">
        {/* Tarjetas de métricas */}
        <Card title="Total Donantes">
          <p className="metric">{totalDonantes}</p>
        </Card>
        <Card title="Total Beneficiarios">
          <p className="metric">{totalBeneficiarios}</p>
        </Card>
        <Card title="Total Donaciones">
          <p className="metric">{totalRealizadas}</p>
        </Card>
      </div>

      {/* Gráfico de donaciones */}
      <div className="chart-container">
        <h3>Estado de las Donaciones</h3>
        <Chart type="pie" data={datosDonaciones} />
      </div>

      {/* Gráfico de impacto social */}
      <div className="chart-container">
        <h3>Impacto Social</h3>
        <Chart type="doughnut" data={datosImpacto} />
      </div>
    </div>
  );
};

export default Dashboard;


import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { fetchAPI } from "../service/api";
import { Beneficiario } from "../types/types";

const BeneficiariosTable: React.FC = () => {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([]);

  const cargarBeneficiarios = async () => {
    try {
      const data = await fetchAPI("/beneficiarios");
      setBeneficiarios(data);
    } catch (error) {
      console.error("Error al cargar beneficiarios", error);
    }
  };

  useEffect(() => {
    cargarBeneficiarios();
  }, []);

  // 📌 Función para mostrar las donaciones de un beneficiario
  const donacionesTemplate = (rowData: Beneficiario) => {
    if (!rowData.donaciones || rowData.donaciones.length === 0) {
      return "Sin donaciones";
    }
    return rowData.donaciones.map((d) => `ID: ${d.id}, ${d.tipoAlimento}`).join(" | ");
  };

  return (
    <div>
      <h2>BENEFICIARIOS</h2>
      <Button label="Actualizar" icon="pi pi-refresh" onClick={cargarBeneficiarios} />
      <DataTable value={beneficiarios} paginator rows={5}>
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="contacto" header="Contacto" />
        <Column header="Donaciones" body={donacionesTemplate} />
      </DataTable>
    </div>
  );
};

export default BeneficiariosTable;


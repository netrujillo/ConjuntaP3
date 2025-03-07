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

  return (
    <div>
      <h2>BENEFICIARIOS</h2>
      <Button label="Actualizar" icon="pi pi-refresh" onClick={cargarBeneficiarios} />
      <DataTable value={beneficiarios} paginator rows={5}>
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="contacto" header="Contacto" />
        <Column field="ubicacion" header="Ubicación" />
      </DataTable>
    </div>
  );
};

export default BeneficiariosTable;

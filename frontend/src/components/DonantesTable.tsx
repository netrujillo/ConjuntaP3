import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { fetchAPI } from "../service/api";
import { Donante } from "../types/types";

const DonantesTable: React.FC = () => {
  const [donantes, setDonantes] = useState<Donante[]>([]);

  const cargarDonantes = async () => {
    try {
      const data = await fetchAPI("/donantes");
      setDonantes(data);
    } catch (error) {
      console.error("Error al cargar donantes", error);
    }
  };

  useEffect(() => {
    cargarDonantes();
  }, []);

  return (
    <div>
      <h2>DONANTES</h2>
      <Button label="Actualizar" icon="pi pi-refresh" onClick={cargarDonantes} />
      <DataTable value={donantes} paginator rows={5}>
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="contacto" header="Contacto" />
        <Column field="ubicacion" header="Ubicación" />
      </DataTable>
    </div>
  );
};

export default DonantesTable;

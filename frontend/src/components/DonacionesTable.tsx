import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { fetchAPI } from "../service/api";
import { Donacion } from "../types/types";

const DonacionesTable = () => {
  const [donaciones, setDonaciones] = useState<Donacion[]>([]);

  const cargarDonaciones = async () => {
    try {
      const data = await fetchAPI("/donaciones");
      setDonaciones(data);
    } catch (error) {
      console.error("Error al cargar donaciones", error);
    }
  };

  useEffect(() => {
    cargarDonaciones();
  }, []);

  return (
    <div>
      <h2>DONACIONES</h2>
      <Button label="Actualizar" icon="pi pi-refresh" onClick={cargarDonaciones} />
      <DataTable value={donaciones} paginator rows={5}>
        <Column field="id" header="ID" />
        <Column field="tipoAlimento" header="Tipo de Alimento" />
        <Column field="cantidad" header="Cantidad" />
        <Column field="ubicacion" header="Ubicación" />
        <Column field="estado" header="Estado" />
        <Column field="fechaCreacion" header="Fecha" />
        <Column field="donante.nombre" header="Donante" />
        <Column
          header="Beneficiarios"
          body={(rowData: Donacion) =>
            rowData.beneficiarios && rowData.beneficiarios.length > 0
              ? rowData.beneficiarios.map((b) => b.nombre).join(", ")
              : "Sin beneficiarios"
          }
        />
      </DataTable>
    </div>
  );
};

export default DonacionesTable;


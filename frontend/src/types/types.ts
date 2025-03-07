export interface Donante {
    id: number;
    nombre: string;
    contacto: string;
    ubicacion: string;
  }
  
  export interface Beneficiario {
    id: number;
    nombre: string;
    contacto: string;
    ubicacion: string;
  }
  
  export interface Donacion {
    id: number;
    tipoAlimento: string;
    cantidad: number;
    ubicacion: string;
    estado: string; // DISPONIBLE, ASIGNADA, ENTREGADA
    fechaCreacion: string;
    donante: Donante;
    beneficiarios: Beneficiario[];
  }
  
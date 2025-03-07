import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Donante } from '../donantes/donante.entity';
import { Beneficiario } from '../beneficiarios/beneficiario.entity';

@Entity({ name: 'donaciones' })
export class Donacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tipoAlimento: string;

  @Column()
  cantidad: number;

  @Column()
  ubicacion: string;

  @Column({ default: 'DISPONIBLE' })
  estado: string; // DISPONIBLE, ASIGNADA, ENTREGADA

  @CreateDateColumn()
  fechaCreacion: Date;

  @ManyToOne(() => Donante, (donante) => donante.donaciones)
  donante: Donante;

  @ManyToMany(() => Beneficiario, (beneficiario) => beneficiario.donaciones)
  @JoinTable()
  beneficiarios: Beneficiario[];
}


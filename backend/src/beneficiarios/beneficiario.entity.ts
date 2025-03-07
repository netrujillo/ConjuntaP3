import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Donacion } from '../donaciones/donacion.entity';

@Entity({ name: 'beneficiarios' })
export class Beneficiario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  contacto: string;

  @ManyToMany(() => Donacion, (donacion) => donacion.beneficiarios)
  donaciones: Donacion[];
}

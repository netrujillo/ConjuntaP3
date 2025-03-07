import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Donacion } from '../donaciones/donacion.entity';

@Entity({ name: 'donantes' })
export class Donante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  contacto: string;

  @OneToMany(() => Donacion, (donacion) => donacion.donante)
  donaciones: Donacion[];
}

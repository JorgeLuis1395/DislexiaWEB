import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity('web_dislexia')
export class ResultadoEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number;
    @Column({length: 50})
    nombre: string;
    @Column({length: 50})
    apellido: string;
    @Column({length: 100})
    correo_electronico: string;
    @Column()
    edad: number;
    @Column({length: 50})
    usuario: string;
    @Column({length: 50})
    contrasena: string;


}
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
import {ProfesorEntity} from "../Profesor/profesor.entity";
@Entity('web_dislexia')
export class UsuarioEntity {

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
    contrasenia: string;

    @OneToMany(
        type => EstudianteEntity,
        estudianteEntity => estudianteEntity.usuarioFK)
    estudiantes: EstudianteEntity[];

    @OneToMany(
        type => ProfesorEntity,
        profesorEntity => profesorEntity.usuarioFK)
    profesores: ProfesorEntity[];

}
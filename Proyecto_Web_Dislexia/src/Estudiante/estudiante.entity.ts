import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
@Entity('web_dislexia')
export class EstudianteEntity {

    @PrimaryGeneratedColumn()
    id_estudiante: number;
    @Column()
    anio_educacion_basica: number;

    @ManyToOne(
        type => UsuarioEntity,
        estudianteEntity => estudianteEntity.estudiantes)
    usuarioFK: UsuarioEntity;

}
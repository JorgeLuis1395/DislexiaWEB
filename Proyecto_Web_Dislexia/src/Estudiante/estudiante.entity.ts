import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
@Entity('web_dislexia')
export class EstudianteEntity {

    @PrimaryGeneratedColumn()
    id_estudiante: number;
    @Column()
    anio_educacion_basica: number;

    @ManyToMany(
        type => UsuarioEntity,
        estudianteEntity => estudianteEntity.estudiante_usuario)
    usuario_estudiante: EstudianteEntity[];

}
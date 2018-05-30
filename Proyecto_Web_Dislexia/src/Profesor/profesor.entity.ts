import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
@Entity('web_dislexia')
export class ProfesorEntity {

    @PrimaryGeneratedColumn()
    id_profesor: number;
    @Column()
    anio_educacion_basica: number;
    @Column({length: 50})
    materia_asignada: string;

    @ManyToMany(
        type => UsuarioEntity,
        profesorEntity => profesorEntity.profesor_usuario)
    usuario_profesor: EstudianteEntity[];
}
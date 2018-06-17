import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {EstudianteEntity} from "../Estudiante/estudiante.entity";
import {JuegoEntity} from "../Juego/juego.entity";
import {AgendaEntity} from "../Agenda/agenda.entity";
@Entity('web_dislexia')
export class ProfesorEntity {

    @PrimaryGeneratedColumn()
    id_profesor: number;
    @Column()
    anio_educacion_basica: number;
    @Column({length: 50})
    materia_asignada: string;

    @ManyToOne(
        type => UsuarioEntity,
        profesorEntity => profesorEntity.profesores)
    usuarioFK: ProfesorEntity[];

    @OneToMany(
        type => JuegoEntity,
        juegoEntity => juegoEntity.profesorFK
    )
    juegoFK: JuegoEntity[];

    @OneToMany(
        type => AgendaEntity,
        agendaEntity => agendaEntity.profesorFK
    )
    agendaFK: AgendaEntity[];
}
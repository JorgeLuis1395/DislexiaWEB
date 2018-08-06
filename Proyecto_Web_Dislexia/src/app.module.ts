import { Module } from '../node_modules/@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";
import {AgendaEntity} from "./Agenda/agenda.entity";
import {EstudianteEntity} from "./Estudiante/estudiante.entity";
import {JuegoEntity} from "./Juego/juego.entity";
import {PrediagnosticoEntity} from "./Prediagnostico/prediagnostico.entity";
import {ProfesorEntity} from "./Profesor/profesor.entity";
import {SolucionEntity} from "./Solucion/solucion.entity";
import {UsuarioEntity} from "./Usuario/usuario.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'web2018aexamen.mysql.database.azure.com',
          port: 3306,
          username: 'KevinDB@web2018aexamen',
          password: 'Web2018A',
          database: 'WebProyecto',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          ssl: true
      }),
      TypeOrmModule.forFeature([
          AgendaEntity,
          EstudianteEntity,
          JuegoEntity,
          PrediagnosticoEntity,
          ProfesorEntity,
          SolucionEntity,
          UsuarioEntity
      ]),
  ],
  controllers: [AppController,UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}

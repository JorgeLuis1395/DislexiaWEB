import {Component} from "@nestjs/common";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Component()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}


    crearUsuario(usuario: Usuario){
        const user = new UsuarioEntity();
        user.nombre = usuario.nombre;
        user.apellido = usuario.apellido;
        user.correo_electronico = usuario.correo_electronico;
        user.edad = usuario.edad;
        user.usuario = usuario.usuario;
        user.contrasenia = usuario.contrasenia;

        this.usuarioRepository.save(user);
    }

}


export class Usuario {
    constructor(
        public nombre:string,
        public apellido:string,
        public correo_electronico:string,
        public edad:number,
        public usuario:string,
        public contrasenia:string,
    ){};
}
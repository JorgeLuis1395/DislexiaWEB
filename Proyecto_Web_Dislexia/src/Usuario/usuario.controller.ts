import {Body, Controller, Post, Res} from "@nestjs/common";
import {UsuarioPipes} from "../pipes/usuario.pipes";
import {USUARIO_SCHEMA} from "./usuario.schema";
import {Usuario, UsuarioService} from "./usuario.service";

@Controller('Usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService){

    }

    @Post('registrarUsuarios')
    registrarUsuario(@Body(new UsuarioPipes(USUARIO_SCHEMA)) bodyParams, @Res () response){
        const usuario = new Usuario(
            bodyParams.nombre,
            bodyParams.apellido,
            bodyParams.correo_electronico,
            bodyParams.edad,
            bodyParams.usuario,
            bodyParams.contrasenia
        );
        this.usuarioService.crearUsuario(usuario);
        return response.send('Usuario Registrado');
    }
}
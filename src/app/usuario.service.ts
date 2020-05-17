import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { 
  }

  public getUsuario (): Usuario {
    let usuario = new Usuario ()
    usuario.nome = 'Lucas'
    usuario.email = 'lucas.brito@gmail.com'
    return usuario
  }

  public listaUsuario (): Usuario [] {
    return [
      {
        nome: 'Lucas',
        email: 'lucas.brito@gmail.com'
      },
      {
        nome: 'Rebeca',
        email: 'rebeca.brito@gmail.com'
      },
      {
        nome: 'Monalisa',
        email: 'monalisa.brito@gmail.com'
      },
      {
        nome: 'Regina',
        email: 'regina.brito@gmail.com'
      },
      {
        nome: 'Jamile',
        email: 'jamile.brito@gmail.com'
      }
    ]
  }
}

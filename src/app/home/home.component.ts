import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: Usuario
  constructor(private usuarioSerive: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioSerive.getUsuario()
  }
}

import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.css']
})
export class EstadosComponent implements OnInit {

  constructor(private estadosService: EstadosService) { }

  estados:any = []
  ngOnInit() {
    this.estadosService.getEstados().subscribe(
      response => {
        this.estados = response
      }
    )
  }

}

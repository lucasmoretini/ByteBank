import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from 'selenium-webdriver/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService){

  }

  ngOnInit(){
    this.limparCampos();
  }

  transferir(): void {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    error => console.error(error));
  }

  limparCampos(): void{
    this.valor = 0;
    this.destino = 0;
  }
}

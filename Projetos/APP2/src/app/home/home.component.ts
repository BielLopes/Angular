import { Component, OnInit } from '@angular/core';
import { OfertasService } from "../ofertas.service"
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ],
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertasSevice: OfertasService) { }

  ngOnInit() {
    //console.log(this.ofetasSevice.getOfertas())
    //this.ofertas = this.ofetasSevice.getOfertas()
    this.ofertasSevice.getOfertas()
      .then(( ofertas: Oferta[]) => { 
        console.log("Aloha em 3 s depois de 3 s")
        this.ofertas = ofertas 
      }) //Promesse bem sucedida
      .catch(( param: any) => { 
        console.log(param) 
      }) //Promesse rejeitada
    /*
    Perceba qua não foi criado nenhuma instâcia explicitamente de OfertasSevice
    logo, foi feita uma injeção do serviço na classe.
     */
  }

}

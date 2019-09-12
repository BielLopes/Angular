import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Frase} from "../shared/frase.model"
import { FRASES } from "./frases-mock"
//import { EventEmitter } from 'protractor'; -> não sei se é a mesma coisa

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Array<Frase> = FRASES
  public instrucao: string = "Taduza a frase:"
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progress: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log("Destruido!")
  }

  //por padraão a visibilidade do Typscript é public
  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value 
    console.log(this.resposta)
    // o (<HTMLInputElement>resposta.target) recupera o estado do elemento e diz que se 
    // trata de um input HTML, logo, é possivel acessar o parametro Value
  }

  public verificarResposta(): void{

    if (this.rodadaFrase.frasePtbr == this.resposta){
      this.rodada++
      this.progress += (100/this.frases.length)

      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizaRodada()      
    } else{
      this.tentativas--
      if (this.tentativas === -1){
        this.encerrarJogo.emit('vitoria')        
      }
    }

  }

  public atualizaRodada(): void{
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada] 

    //limpa o input a cada rodada
    this.resposta = ""
  }

}

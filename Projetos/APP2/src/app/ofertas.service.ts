import { Oferta } from "./shared/oferta.model"
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { request } from 'https'

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient){}

    private url: string = 'http://localhost:3000/'

        /* Forma HardCode
    private ofertas: Oferta[] = [
            {
                id: 1,
                categoria: "restaurante",
                titulo: "Super Burger",
                descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
                anunciante: "Original Burger",
                valor: 29.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/1/img1.jpg"},
                    {url: "/assets/ofertas/1/img2.jpg"},
                    {url: "/assets/ofertas/1/img3.jpg"},
                    {url: "/assets/ofertas/1/img4.jpg"}
                ]
            },
            {
                id: 2,
                categoria: "restaurante",
                titulo: "Cozinha Mexicana",
                descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
                anunciante: "Mexicana",
                valor: 32.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/2/img1.jpg"},
                    {url: "/assets/ofertas/2/img2.jpg"},
                    {url: "/assets/ofertas/2/img3.jpg"},
                    {url: "/assets/ofertas/2/img4.jpg"}
                ]
            
            },
            {
                id: 4,
                categoria: "diversao",
                titulo: "Estância das águas",
                descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
                anunciante: "Estância das águas",
                valor: 31.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/3/img1.jpg"},
                    {url: "/assets/ofertas/3/img2.jpg"},
                    {url: "/assets/ofertas/3/img3.jpg"},
                    {url: "/assets/ofertas/3/img4.jpg"},
                    {url: "/assets/ofertas/3/img5.jpg"},
                    {url: "/assets/ofertas/3/img6.jpg"}
                ]
            }
        ]

    public getOfertasSinc(): Array<Oferta>{
        return this.ofertas
    }
    
    public getOfertas2(): Promise<Array<Oferta>>{
        return new Promise((resolve, reject) => {
            //Algum de tipo de processamento que ao finalizar chama a
            // função resolve ou a função reject
            let deu_certo = true
            if(deu_certo){
                console.log("Aloha")
                setTimeout(() => resolve( this.ofertas ),3000)
                
            }else{
                reject({codigo_erro: 404, message: "Not Found"})
            }
        })
        .then((ofertas: Oferta[]) => {
            console.log("Aloha 2")
            return ofertas
        })
        .then((ofertas: Oferta[]) => {
            console.log("Você pode colocar quantos Alohas em cascata você quiser")
            return new Promise((resolve2, reject2) => {
                setTimeout(() => resolve2(ofertas), 3000)
            })
            .then((ofertas: Oferta[]) => {
                console.log("Mais um aloha só de zueira")
                return ofertas
            })
        })
    }
    */

    public getOfertas(): Promise<Oferta[]>{
        /*Efeturar uma requisição HTTP
        e retornar um array de ofertas*/

        return this.http.get(this.url + "ofertas")
            .toPromise()
            .then((request: any) => request)
    }

}
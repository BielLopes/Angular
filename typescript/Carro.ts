import Veiculo from './veiculo'

export default class Carro extends Veiculo{


    private numeroDePortas: number

    constructor(model:string,nPortas:number){
        super(model)
        this.numeroDePortas = nPortas
    }

}

export let qualquer_coisa: string = "Teste"
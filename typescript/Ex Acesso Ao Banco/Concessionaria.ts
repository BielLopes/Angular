import Carro from './Carro'
import ConcessionariaInterface from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string
    private listaDeCarros: Array<Carro>
    //private listaDeCarros: any Faz com que em tempo de implementação não seja levado em conssideração a tipagem da variavel

    constructor(endereco:string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public forneceEndereco(): string {
        return this.endereco
    }

    public mostraListaDeCarros(): Array<Carro>{
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string{
        return 'De segunda a sxta das 12:00 às 16:00'
    }
}
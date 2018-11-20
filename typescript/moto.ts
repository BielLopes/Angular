import Veiculo from './veiculo'

class Moto extends Veiculo{
    constructor(model:string){
        super(model);
    }

    //@Override
    public acelerar(): void {
        this.velocidade = this.velocidade +15
    }
    
}

export default Moto
//Tem o mesmo efeito de exportaçaõ

//FACILITA COLOCAR TAS A EXPORTAÇÕES DE UM MODULO NO FINAL DO MESMO
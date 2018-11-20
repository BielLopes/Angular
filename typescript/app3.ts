import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('velost', 3);
carro.acelerar()

let moto = new Moto('Yamarra');
moto.acelerar()
moto.acelerar()

console.log(moto);
console.log(carro)

let concesi:Concessionaria = new Concessionaria('Amazonas',[])
console.log(concesi.fornecerHorarioDeFuncionamento())
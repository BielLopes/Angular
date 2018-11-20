import Carro ,{ qualquer_coisa as x} from './Carro'
import  Pessoa  from './Pessoa'
import  Concessionaria  from './Concessionaria'
console.log(x)

/*let carroA = new Carro("Veloster",3)
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.parar()
console.log(carroA)*/


/*let concessi = new Concessionaria("Avenisda Paulista")
console.log(concessi)*/

/*let people = new Pessoa("Jorge","Opala")
console.log(people.dizerCarroPreferido())*/

// ----- CRIAR CORROS -------

let carA = new Carro('dougle journey',4)
let carB = new Carro('Veloster',3)
let carC = new Carro('Cerato',2)

//------ MONTAR A LISTA DE CARROS DA CONCESSIONÀRIA -----

let listaDeCarros: Carro[] = [carA, carB, carC]

let conces = new Concessionaria('Av Paulista', listaDeCarros)

//----- EXIBIR LISTA DE CARROS ----------

//console.log(conces.mostraListaDeCarros())

// ------------ COMPRAR CARRO ----------------

let cliente = new Pessoa('João', 'Veloster')

console.log(cliente.dizerCarroPreferido())

conces.mostraListaDeCarros().map((carro: Carro) => {
    if(carro['modelo'] == cliente.dizerCarroPreferido()){

        //Comprar o carro

        cliente.comprarCarro(carro)
    }

})

console.log(cliente.dizerCarroQueTem())
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importStar(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
console.log(Carro_1.qualquer_coisa);
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
var carA = new Carro_1.default('dougle journey', 4);
var carB = new Carro_1.default('Veloster', 3);
var carC = new Carro_1.default('Cerato', 2);
//------ MONTAR A LISTA DE CARROS DA CONCESSIONÀRIA -----
var listaDeCarros = [carA, carB, carC];
var conces = new Concessionaria_1.default('Av Paulista', listaDeCarros);
//----- EXIBIR LISTA DE CARROS ----------
//console.log(conces.mostraListaDeCarros())
// ------------ COMPRAR CARRO ----------------
var cliente = new Pessoa_1.default('João', 'Veloster');
console.log(cliente.dizerCarroPreferido());
conces.mostraListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //Comprar o carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());

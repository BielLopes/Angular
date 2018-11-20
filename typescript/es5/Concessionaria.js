"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    //private listaDeCarros: any Faz com que em tempo de implementação não seja levado em conssideração a tipagem da variavel
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.forneceEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostraListaDeCarros = function () {
        return this.listaDeCarros;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda a sxta das 12:00 às 16:00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;

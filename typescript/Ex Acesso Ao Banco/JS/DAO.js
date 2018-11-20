"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = '';
    }
    DAO.prototype.insert = function (object) {
        console.log('lógica de insert');
        if (true) {
            return true;
        }
        else {
            return false;
        }
    };
    DAO.prototype.atualizar = function (object) {
        console.log('lógica de update');
        if (true) {
            return true;
        }
        else {
            return false;
        }
    };
    DAO.prototype.remover = function (id) {
        console.log('lógica de delete');
        if (true) {
            return Object();
        }
        else {
            // return false
        }
    };
    DAO.prototype.selecionar = function (id) {
        console.log('lógica de select');
        if (true) {
            return Object();
        }
        else {
            // return false
        }
    };
    DAO.prototype.selecionarTodos = function () {
        console.log('lógica de getAll');
        return [Object(), Object()];
    };
    return DAO;
}());
exports.default = DAO;

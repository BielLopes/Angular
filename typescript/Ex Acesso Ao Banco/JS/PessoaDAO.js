"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessaDAO = /** @class */ (function () {
    function PessaDAO() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessaDAO.prototype.insert = function (object) {
        console.log('logiga de insert');
        if (true) {
            return true;
        }
        else {
            return false;
        }
    };
    PessaDAO.prototype.atualizar = function (object) {
        console.log('logiga de update');
        if (true) {
            return true;
        }
        else {
            return false;
        }
    };
    PessaDAO.prototype.remover = function (id) {
        console.log('logiga de delete');
        if (true) {
            return new Pessoa_1.default('', '');
        }
        else {
            // return false
        }
    };
    PessaDAO.prototype.selecionar = function (id) {
        console.log('logiga de select');
        if (true) {
            return new Pessoa_1.default('', '');
        }
        else {
            // return false
        }
    };
    PessaDAO.prototype.selecionarTodos = function () {
        console.log('logiga de getAll');
        return [new Pessoa_1.default('', ''), new Pessoa_1.default('', '')];
    };
    return PessaDAO;
}());
exports.default = PessaDAO;

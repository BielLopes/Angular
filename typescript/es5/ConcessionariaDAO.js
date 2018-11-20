"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDAO.prototype.insert = function (object) {
        console.log('logiga de insert');
        if (true) {
            return true;
        }
        else {
            return false;
        }
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log('logiga de update');
        if (true) {
            return true;
        }
        else {
            return false;
        }
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log('logiga de delete');
        if (true) {
            return new Concessionaria_1.default("", []);
        }
        else {
            // return false
        }
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log('logiga de select');
        if (true) {
            return new Concessionaria_1.default('', []);
        }
        else {
            // return false
        }
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log('logiga de getAll');
        return [new Concessionaria_1.default('', []), new Concessionaria_1.default('', [])];
    };
    return ConcessionariaDAO;
}());
exports.default = ConcessionariaDAO;

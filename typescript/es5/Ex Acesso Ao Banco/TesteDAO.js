"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var DAO_1 = __importDefault(require("./DAO"));
//let dao: ConcessionariaDAO = new ConcessionariaDAO()
var concessionaria = new Concessionaria_1.default('', []);
//dao.insert(concessionaria)
//let dao2: PessoaDAO = new PessoaDAO()
var pessoa = new Pessoa_1.default('', '');
var dao3 = new DAO_1.default();
dao3.insert(concessionaria);
var dao4 = new DAO_1.default();
dao4.insert(pessoa);
dao4.remover(5);
//dao2.insert(pessoa)
//import ConcessionariaDAO from './ConcessionariaDAO'
//import PessoaDAO from './PessoaDAO'

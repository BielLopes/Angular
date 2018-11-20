"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDAO_1 = __importDefault(require("./ConcessionariaDAO"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var PessoaDAO_1 = __importDefault(require("./PessoaDAO"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var dao = new ConcessionariaDAO_1.default();
var concessionaria = new Concessionaria_1.default('', []);
dao.insert(concessionaria);
var dao2 = new PessoaDAO_1.default();
var pessoa = new Pessoa_1.default('', '');
dao2.insert(pessoa);

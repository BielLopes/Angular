"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var veiculo_1 = __importDefault(require("./veiculo"));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(model) {
        return _super.call(this, model) || this;
    }
    //@Override
    Moto.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 15;
    };
    return Moto;
}(veiculo_1.default));
exports.default = Moto;
//Tem o mesmo efeito de exportaçaõ
//FACILITA COLOCAR TAS A EXPORTAÇÕES DE UM MODULO NO FINAL DO MESMO

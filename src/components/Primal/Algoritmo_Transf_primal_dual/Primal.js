"use strict";
exports.__esModule = true;
var Primal = /** @class */ (function () {
    function Primal(matriz, tipo) {
        this.matriz = [];
        this.funcaoObjetiva = [];
        this.corpo = [];
        this.restricoes = [];
        this.sinalIgualdade = [];
        this.valoresIgualdade = [];
        this.matriz = matriz;
        this.tipo = tipo;
        this.getFuncaoObjetiva();
        this.getCorpo();
        this.getRestricoes();
        this.getValorIgualdade();
        this.getSinalIgualdade();
    }
    Primal.prototype.getFuncaoObjetiva = function () {
        for (var j = 0; j < this.matriz[0].length; j++) {
            this.funcaoObjetiva[j] = this.matriz[0][j];
        }
    };
    Primal.prototype.getCorpo = function () {
        for (var i = 1; i < this.matriz.length - 1; i++) {
            this.corpo[i - 1] = [];
            for (var j = 0; j < this.matriz[0].length; j++) {
                this.corpo[i - 1][j] = this.matriz[i][j];
            }
        }
    };
    Primal.prototype.getRestricoes = function () {
        for (var j = 0; j < this.matriz[0].length; j++) {
            this.restricoes[j] = this.matriz[this.matriz.length - 1][j];
        }
    };
    Primal.prototype.getValorIgualdade = function () {
        for (var i = 1; i < this.matriz.length - 1; i++) {
            this.valoresIgualdade[i - 1] = this.matriz[i][this.matriz[1].length - 1];
        }
    };
    Primal.prototype.getSinalIgualdade = function () {
        for (var i = 1; i < this.matriz.length - 1; i++) {
            this.sinalIgualdade[i - 1] = this.matriz[i][this.matriz[1].length - 2];
        }
    };
    return Primal;
}());
exports.Primal = Primal;

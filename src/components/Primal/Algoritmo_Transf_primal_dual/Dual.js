"use strict";
exports.__esModule = true;
var Dual = /** @class */ (function () {
    function Dual(primal) {
        this.primal = primal;
        this.matriz = [];
        this.funcaoObjetiva = [];
        this.corpo = [];
        this.restricoes = [];
        this.sinalIgualdade = [];
        this.valoresIgualdade = [];
        this.getTipo();
        this.getFuncaoObjetiva();
        this.getCorpo();
        this.getRestricoes();
        this.getValorIgualdade();
        this.getSinalIgualdade();
        this.construirMatriz();
    }
    Dual.prototype.getTipo = function () {
        if (this.primal.tipo == "Max") {
            this.tipo = "Min";
        }
        else {
            this.tipo = "Max";
        }
    };
    Dual.prototype.getFuncaoObjetiva = function () {
        for (var i = 0; i < this.primal.valoresIgualdade.length; i++) {
            this.funcaoObjetiva[i] = this.primal.valoresIgualdade[i];
        }
    };
    Dual.prototype.getCorpo = function () {
        for (var j = 0; j < this.primal.corpo[0].length; j++) {
            this.corpo[j] = [];
            for (var i = 0; i < this.primal.corpo.length; i++) {
                if (this.primal.corpo[i][j] == undefined) {
                    this.corpo[j][i] = 0;
                }
                else {
                    this.corpo[j][i] = this.primal.corpo[i][j];
                }
            }
        }
    };
    Dual.prototype.getRestricoes = function () {
        if (this.tipo == "Min") {
            for (var i = 0; i < this.primal.sinalIgualdade.length; i++) {
                if (this.primal.sinalIgualdade[i] == ">=") {
                    this.restricoes[i] = "<=";
                }
                else if (this.primal.sinalIgualdade[i] == "<=") {
                    this.restricoes[i] = ">=";
                }
                else {
                    this.restricoes[i] = "livre";
                }
            }
        }
        else {
            for (var i = 0; i < this.primal.sinalIgualdade.length; i++) {
                if (this.primal.sinalIgualdade[i] == ">=") {
                    this.restricoes[i] = ">=";
                }
                else if (this.primal.sinalIgualdade[i] == "<=") {
                    this.restricoes[i] = "<=";
                }
                else {
                    this.restricoes[i] = "livre";
                }
            }
        }
    };
    Dual.prototype.getValorIgualdade = function () {
        for (var i = 0; i < this.primal.funcaoObjetiva.length; i++) {
            this.valoresIgualdade[i] = this.primal.funcaoObjetiva[i];
        }
    };
    Dual.prototype.getSinalIgualdade = function () {
        if (this.tipo == "Min") {
            for (var i = 0; i < this.primal.restricoes.length; i++) {
                if (this.primal.restricoes[i] == ">=") {
                    this.sinalIgualdade[i] = ">=";
                }
                else if (this.primal.restricoes[i] == "<=") {
                    this.sinalIgualdade[i] = "<=";
                }
                else {
                    this.sinalIgualdade[i] = "=";
                }
            }
        }
        else {
            for (var i = 0; i < this.primal.restricoes.length; i++) {
                if (this.primal.restricoes[i] == ">=") {
                    this.sinalIgualdade[i] = "<=";
                }
                else if (this.primal.restricoes[i] == "<=") {
                    this.sinalIgualdade[i] = ">=";
                }
                else {
                    this.sinalIgualdade[i] = "=";
                }
            }
        }
    };
    Dual.prototype.construirMatriz = function () {
        this.matriz[0] = this.funcaoObjetiva;
        for (var i = 1; i <= this.corpo.length; i++) {
            this.matriz[i] = this.corpo[i - 1].concat(this.sinalIgualdade[i - 1], this.valoresIgualdade[i - 1]);
        }
        this.matriz[this.corpo.length + 1] = this.restricoes;
    };
    return Dual;
}());
exports.Dual = Dual;

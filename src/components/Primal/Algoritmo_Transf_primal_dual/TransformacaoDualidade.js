"use strict";
exports.__esModule = true;
var Primal_1 = require("./Primal");
var Dual_1 = require("./Dual");
var TransformacaoDualidade = /** @class */ (function () {
    function TransformacaoDualidade(matriz, tipo) {
        console.log("PRIMAL: ");
        var primal = new Primal_1.Primal(matriz, tipo);
        console.log(tipo);
        console.log(matriz);
        console.log("DUAL: \n");
        var dual = new Dual_1.Dual(primal);
        console.log(dual.tipo);
        this.matrizDual = dual.matriz;
        console.log(this.matrizDual);
    }
    return TransformacaoDualidade;
}());
exports.TransformacaoDualidade = TransformacaoDualidade;

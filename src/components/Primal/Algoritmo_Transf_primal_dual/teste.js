"use strict";
exports.__esModule = true;
var TransformacaoDualidade_1 = require("./TransformacaoDualidade");
var matriz = [[1, 2, 3, 4], [5, , 7, 8, "=", 9], [10, 11, 12, , "<=", 14], [">=", "<=", ">=", "livre"]];
var primal = new TransformacaoDualidade_1.TransformacaoDualidade(matriz, "Min");

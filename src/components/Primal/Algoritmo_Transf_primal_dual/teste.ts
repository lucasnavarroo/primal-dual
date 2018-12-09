import { TransformacaoDualidade } from "./TransformacaoDualidade";

var matriz = [[1, 2, 3, 4], [5, , 7, 8, "=", 9], [10, 11, 12, , "<=", 14], [">=", "<=", ">=", "livre"]];
var primal: TransformacaoDualidade = new TransformacaoDualidade(matriz, "Min");


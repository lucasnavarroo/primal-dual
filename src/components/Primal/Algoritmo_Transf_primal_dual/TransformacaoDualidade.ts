import { Primal } from "./Primal";
import { Dual } from "./Dual";

export class TransformacaoDualidade{

    matrizDual: any[][];

    constructor(matriz: any[][], tipo: String){
        console.log("PRIMAL: ");
        var primal = new Primal(matriz, tipo);
        console.log(tipo)
        console.log(matriz)

        console.log("DUAL: \n")
        var dual = new Dual(primal);
        console.log(dual.tipo);
        this.matrizDual = dual.matriz;
        console.log(this.matrizDual);
    }
}
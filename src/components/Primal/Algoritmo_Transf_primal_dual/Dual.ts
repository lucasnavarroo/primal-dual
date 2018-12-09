import { Primal } from "./Primal";

export class Dual {
    matriz: any[][] = [];
    tipo: any;
    funcaoObjetiva: any[] = [];
    corpo: any[][] = [];
    restricoes: any[] = [];
    sinalIgualdade: any[] = [];
    valoresIgualdade: any[] = [];

    constructor(private primal: Primal) {
        this.getTipo();
        this.getFuncaoObjetiva();
        this.getCorpo();
        this.getRestricoes();
        this.getValorIgualdade();
        this.getSinalIgualdade();
        this.construirMatriz();
    }

    private getTipo(){
        if(this.primal.tipo == "Max"){
            this.tipo = "Min";
        }else{
            this.tipo = "Max";
        }
    }

    private getFuncaoObjetiva(){
        for (let i = 0; i < this.primal.valoresIgualdade.length; i++) {
            this.funcaoObjetiva[i] = this.primal.valoresIgualdade[i];
        }
    }

    private getCorpo(){
        for (let j = 0; j < this.primal.corpo[0].length; j++) {
            this.corpo[j] = [];
            for (let i = 0; i < this.primal.corpo.length; i++) {
                if(this.primal.corpo[i][j] == undefined){
                    this.corpo[j][i] = 0
                } else {
                    this.corpo[j][i] = this.primal.corpo[i][j];
                }
            } 
        }
    }

    private getRestricoes(){
        if(this.tipo == "Min"){
            for (let i = 0; i < this.primal.sinalIgualdade.length; i++) {
                if (this.primal.sinalIgualdade[i] == ">=") {
                    this.restricoes[i] = "<=";    
                } else if (this.primal.sinalIgualdade[i] == "<=") {
                    this.restricoes[i] = ">=";
                } else {
                    this.restricoes[i] = "livre";
                }
            }
        }else{
            for (let i = 0; i < this.primal.sinalIgualdade.length; i++) {
                if (this.primal.sinalIgualdade[i] == ">=") {
                    this.restricoes[i] = ">=";    
                } else if (this.primal.sinalIgualdade[i] == "<=") {
                    this.restricoes[i] = "<=";
                } else {
                    this.restricoes[i] = "livre";
                }
            }
        }
    }

    private getValorIgualdade(){
        for (let i = 0; i < this.primal.funcaoObjetiva.length; i++) {
            this.valoresIgualdade[i] = this.primal.funcaoObjetiva[i];
        }
    }

    private getSinalIgualdade(){
        if (this.tipo == "Min") {
            for (let i = 0; i < this.primal.restricoes.length; i++) {
                if(this.primal.restricoes[i] == ">="){
                    this.sinalIgualdade[i] = ">=";
                } else if(this.primal.restricoes[i] == "<="){
                    this.sinalIgualdade[i] = "<=";
                } else {
                    this.sinalIgualdade[i] = "=";
                }
            }
        } else {
            for (let i = 0; i < this.primal.restricoes.length; i++) {
                if(this.primal.restricoes[i] == ">="){
                    this.sinalIgualdade[i] = "<=";
                } else if(this.primal.restricoes[i] == "<="){
                    this.sinalIgualdade[i] = ">=";
                } else {
                    this.sinalIgualdade[i] = "=";
                }
            }
        }
    }

    private construirMatriz() {
        this.matriz[0] = this.funcaoObjetiva;
        for (let i = 1; i <= this.corpo.length; i++) {
            this.matriz[i] = this.corpo[i - 1].concat(this.sinalIgualdade[i - 1], this.valoresIgualdade[i - 1]);
        }
        this.matriz[this.corpo.length + 1] = this.restricoes;
    }
}
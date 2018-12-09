export class Primal {
    matriz: any[][] = [];
    tipo: any;
    funcaoObjetiva: any[] = [];
    corpo: any[][] = [];
    restricoes: any[] = [];
    sinalIgualdade: any[] = [];
    valoresIgualdade: any[] = [];

    constructor(matriz: any[][], tipo: String) {
        this.matriz = matriz;
        this.tipo = tipo;
        this.getFuncaoObjetiva();
        this.getCorpo();
        this.getRestricoes();
        this.getValorIgualdade();
        this.getSinalIgualdade();
    }

    private getFuncaoObjetiva() {
        for (let j = 0; j < this.matriz[0].length; j++) {
            this.funcaoObjetiva[j] = this.matriz[0][j];
        }
    }

    private getCorpo(){
        for (let i = 1; i < this.matriz.length - 1; i++) {
            this.corpo[i - 1] = []
            for (let j = 0; j < this.matriz[0].length; j++) {
                this.corpo[i - 1][j] = this.matriz[i][j];
            }
        }
    }

    private getRestricoes(){
        for (let j = 0; j < this.matriz[0].length; j++) {
            this.restricoes[j] = this.matriz[this.matriz.length - 1][j]
        }
    }

    private getValorIgualdade(){
        for (let i = 1; i < this.matriz.length - 1; i++) {
            this.valoresIgualdade[i - 1] = this.matriz[i][this.matriz[1].length - 1];
        }
    }

    private getSinalIgualdade(){
        for (let i = 1; i < this.matriz.length - 1; i++) {
            this.sinalIgualdade[i - 1] = this.matriz[i][this.matriz[1].length - 2];
        }
        
    }
}
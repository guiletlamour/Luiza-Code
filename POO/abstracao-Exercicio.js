class ChegarNoTrabalho {

    constructor(CreditoNoBilhete,PassagemPaga){
        this.CreditoNoBilhete = CreditoNoBilhete;
        this.PassagemPaga = PassagemPaga;
        this.SaldoNoBilhete = CreditoNoBilhete - PassagemPaga; 
    }

    Caminhar() {
       
     return "Chegou até a estação"; 

    }

    PassarNaCatraca() {

        if(this.CreditoNoBilhete > this.PassagemPaga){
        
     return 'Pagar passagem que está R$4.40 Saldo no bilhete   ' + 
     
     this.CreditoNoBilhete + ' -- Passagem cobrada, valor atual no bilhete  ' + this.SaldoNoBilhete;

        } else {
         
            return 'Sem crédito suficiente, volte para casa'

    }}

    DescerNaEstaçãoSé(){

        return "Chegou na estação correta"
    }

    Caminhar2(){
    
        return "Você chegou no trabalho, bom dia";
    }

    

}


let end = new ChegarNoTrabalho(200 , 4.40);

console.log(end.PassarNaCatraca);
console.log(end.Caminhar2);


/**
 * Herança Simples - Exemplos
 * 
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  verificaMaioridade(idade) {
    if (idade < 18) {
      console.log('esta pessoa é menor de idade');
    } else {
      console.log('esta pessoa pode beber');
    }
  }

  VerificaNome(primeiroNome){

    if (primeiroNome === this.nome){
      return 'Nome correto';

    }else { 
      return'Nome incorreto';
    }

  }
}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, cpf) {
    super(nome, sobrenome); //usada para acessar o objeto/classe pai
    this.cpf = cpf;
  }

  setCnpj(nome) {
    this.nome = nome;
  }

  getCnpj() {
    return this.nome;
  }

  VerificaCPF(recebeCpf){

    if (recebeCpf === this.cpf){
      return 'Cpf correto';

    }else{ 

      return 'Cpf incorreto';   

}
  }
}

let pessoa = new Pfisica('Maria', 'Ribeiro', '11154545471');
console.log(pessoa.verificaMaioridade(20));
console.log(pessoa.VerificaNome('Maria'));
console.log(pessoa.VerificaCPF('11154545471'));

class PJuridica extends Pessoa {
  constructor(nome, sobrenome, cnpj) {
    super(nome, sobrenome);
    this.cnpj = cnpj;
  }

  setCnpj(nome) {
    this.nome = nome;
  }

  getCnpj(nome) {
    return this.nome;
  }

  VerificaCNPJ(recebeCNPJ){

    if (recebeCNPJ === this.cnpj){
      return 'CNPJ correto';

    }else{ 

      return 'CNPJ incorreto';  
  
}
  }
}

let empresa = new PJuridica('Magalu', 'LTDA', '121321321/0001-10');
console.log(empresa);
console.log(empresa.VerificaNome('Magali'));
console.log(empresa.VerificaCNPJ('121321321/0001-10'));



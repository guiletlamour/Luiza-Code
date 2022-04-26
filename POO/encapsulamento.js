/**
 * Encapsulamento - Exemplo
 * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
 */
class Pessoa {

  #idade  // Precisa instanciar como privado aqui e abaixo no construtor ?
  #name 

  constructor(idade, name) {
    this.#idade = idade;   
    this.#name = name;
  }

   get name(){

       return this.#name;
   }

   get idade(){

    return this.#idade;

   }
  

  _verificaIdade() {
    if (this.#idade > 18) {
      console.log('Maior de Idade');
    } else {
      console.log('Menor de Idade')
    }
  }
}

let pessoa = new Pessoa(15, 'Ana');
console.log(pessoa._verificaIdade());
console.log(pessoa.name);
console.log(pessoa.idade);

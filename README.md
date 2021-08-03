# Curso de JavaScript: Interfaces e Herança em Orientação a Objetos

## Módulo 1

* Revisão de Classe, propriedades, acessores, atributos estáticos, etc
* Boas práticas ao declarar atributos

Em vez de inicializar os atributos sem algum valor, na MDN é indicado que você inicialize-os em algum método da classe, geralmente o construtor.

* Declarando sempre as propriedades como sendo privadas inicialmente
* Problemas de duplicação de código
* Problemas de código extremamente compartilhado

## Módulo 2

* Especializando o código
* Herdando propriedades e atributos
* Sobrecarga de métodos
* Compartilhando código de forma segura
* Mantendo nosso código na linguagem do cliente
* Evitando código muito complicado através da herança
* Palavra-chave `super`

A palavra-chave `super` basicamente guarda uma referência para a classe mãe daquela instância de objeto. Ela também deve ser usada no construtor de classes filhas para chamar o construtor da classe mãe.

* Métodos e propriedades privadas e protegidas

## Módulo 3

* Como o JS sabe quem está sendo instanciado

Caso estejamos utilizando uma classe mãe abstrata, por exemplo `Conta`, e queremos saber se o objeto é uma instância direta dessa classe mãe (o que não queremos), fazemos a verificação:

```js
if (this.constructor == Conta) {
    console.error("É uma instância direta de Conta!");
}
```

Diferente de se fizermos `this instanceof Conta`, que será verdadeiro mesmo se `this` for instância das classes filhas de `Conta`.

* Pensando na proteção do nosso sistema
* Lançando erros para o sistema

Lançamos erros para que a execução do script seja interrompida, já que o javascript não possui  as palavras-chaves específicas de POO, como `private`, `protected` ou `abstract`, e suas lógicas devem ser implementadas.

* Classes abstratas
* Métodos abstratos

Por exemplo, para implementar um método abstrato, basta lançarmos um erro no bloco de execução do método. Assim, obrigamos que as classes filhas sobrescrevam o método.

* Erros em tempo de execução

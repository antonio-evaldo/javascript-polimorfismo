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

Lançamos erros para que a execução do script seja interrompida, já que o javascript não possui algumas das palavras-chaves específicas de POO, como `private`, `protected` ou `abstract`, e suas lógicas devem ser implementadas.

* Classes abstratas
* Métodos abstratos

Por exemplo, para implementar um método abstrato, basta lançarmos um erro no bloco de execução do método. Assim, obrigamos que as classes filhas sobrescrevam o método.

* Erros em tempo de execução

## Módulo 4

* Revisão de Herança, boas práticas de código e encapsulamento
* Polimorfismo

Polimorfismo é a técnica de aproveitar propriedades, métodos e quaisquer outras características que a Herança proporciona. Por exemplo, as classes `Diretor` e `Gerente` herdam de `Funcionario`, e caso eu tenha um método de outra classe que espera uma instância de `Funcionario` como parâmetro, eu posso usar instâncias `Diretor` e `Gerente` também, já que também são instâncias de `Funcionario` e herdam suas propriedades e métodos.

* Métodos estáticos
* Maneiras de tratar objetos de diferentes tipos de maneira parecida

## Módulo 5

* Operador `in`

Com o operador `in`, verificamos se existe uma propriedade ou atributo com um certo nome em um objeto. O exemplo abaixo verifica se `autenticavel.autenticar` existe e se é um método de `autenticavel`:

```js
"autenticar" in autenticavel &&
autenticavel.autenticar instanceof Function
```

* Operador `instaceof`
* Como proteger nossos sistemas
* Interfaces padronizadas
* Ducky Typing e sua relação com Interfaces

Duck Typing pode ser resumido na frase: "Se anda como um pato, faz quack como um pato, então deve ser um pato". Basicamente, é o emprego de "interfaces" no javascript, ao fazer a verificação se certo objeto possui as propriedades e métodos esperados.

Por exemplo, nem todos no nosso sistema são **autenticáveis**, e os que são fazem parte de classes como `Gerente`, `Funcionario` e `Cliente`. Essas classes não têm uma classe mãe em comum, e aí que entra o conceito de Interface, e nesse caso, todas as pessoas autenticáveis devem ter o método `autenticar`.
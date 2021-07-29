# Curso de JavaScript Orientado a Objetos

## Módulo 1

Foi aprendido sobre:

* Criar Classes
* O que são atributos
* Instância/Objeto
* Operador `new`

## Módulo 2

Foi aprendido sobre:

* Criação de métodos
* Palavra chave `this`
* Encapsulamento
* Proposta de atributos privados

A [proposta](https://github.com/tc39/proposal-class-fields#private-fields) de se usar `#` para atributos privados já foi feita há anos e já está bem avançada, com o Node.js já a implementando, mas a linguagem em si ainda não a adotou. Ou seja, não deve ser utilizada em produção, e a convenção atualmente feita é para se utilizar `_`. Isso não torna os atributos e métodos privados de verdade, mas os desenvolvedores saberão que não podem ser modificados.

* `return` e *early return*

## Módulo 3

Foi aprendido sobre:

* Package.json
* Modules
* import/export

Os Modules do JS foram implementados no ES6, trazendo novas palavras-chave como `import` e `export`. Cada arquivo do JS pode ser tratado como um módulo e isso deve ser especificado no arquivo `package.json` com a configuração `"type": "module"`, caso contrário o Node indicará um erro. Além disso, alguns navegadores não suportam essa funcionalidade e não é recomendado utilizar os modules diretamente em produção, mas algumas bibliotecas e frameworks permitem que trabalhemos com eles sem problemas, pois transcompilam o código para que qualquer navegador consiga ler.

* Vantagens de se usar classes

O código tem potencial para se tornar bastante reaproveitável e legível, quando fazemos, por exemplo, integração entre diferentes instâncias de objetos. No caso dessa aula, foi feito o método `transferir`, onde usamos a própria instância da conta para fazer um saque e usamos a instância da outra conta que recebemos por parâmetro para fazer o depósito.

* Tipos de valor e tipos de referência
* Alterando dinamicamente um objeto

No JavaScript, tipos que não são primitivos guardam na variável um valor da referência para, por exemplo, o objeto. Por isso que quando passamos a instância de um objeto como parâmetro de uma métodos, podemos nos aproveitar de todas as informações da instância dentro da declaração do método, alterando dinamicamente a instância do objeto.

## Módulo 4

Foi aprendido sobre:

* Diferenças entre `null` e `undefined`
* Aprofundando conhecimentos de referências a um espaço de memória
* Get e Set

[get](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/get) e [set](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/set) são acessores muito poderosos da linguagem, que permitem, por exemplo, que apliquemos **regras de proteção** ao atribuir um novo valor a uma propriedade de um objeto (com `set`) ou que simplesmente proteja a propriedade de ser acessada (ao propositalmente não ter um `get`). Esses acessores possuem sintaxe semelhante à das funções, com a diferença que não precisa usar parênteses ao "chamá-los", e no caso do `set`, o parâmetro que ele recebe é o novo valor que queremos atribuir.

* Melhor encapsulamento da classe
* Protegendo atributos sensíveis

Por exemplo, ao associar um cliente a uma conta, sem os acessores, podemos atribuir qualquer valor a `Conta.cliente`. Então na classe `Conta`, devemos ter a propriedade `_cliente`, a qual não deve ser manipulada diretamente no código, mas podemos atribuir um cliente a ela através do setter `cliente`. E a esse setter só podemos atribuir uma variável do tipo `Cliente`, então na classe `Conta` devemos ter:

```js
set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
        this._cliente = novoValor;
    }
}
```

E assim podemos executar:

```js
const conta1 = new ContaCorrente();
const cliente1 = new Cliente();
conta1.cliente = cliente1;  // cliente1 será o parâmetro "novoValor" no setter da classe Conta!
```

Da mesma forma, nosso código permite que acessemos o cliente, se tivermos um getter `cliente`:

```js
get cliente() {
    return this._cliente;
}
```

E podemos executar:

```js
console.log(conta1.cliente) // Diferente de funções, não é necessário usar parênteses ao utilizar os acessores.
```

## Módulo 5

Foi aprendido sobre:

* Construtores
* Encapsulamento
* Atributos "readonly"
* Atributos estáticos
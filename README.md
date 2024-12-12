# Projeto Conta Bancária - Typescript

<br />

<div align="center">
   <img src="https://i.imgur.com/izFuHID.png" title="source: imgur.com" width="25%"/>
</div>

<br />

## Descrição



Aplicativo Console, desenvolvido com a Linguagem TypeScript, com o objetivo de simular um Sistema de Gerenciamento de Contas Bancárias, utilizando os recursos básicos da linguagem TypeScript e o Paradigma da Programação Orientada a Objetos. Para armazenar os dados das Contas foi utilizada a Collection Array, que permite manter os dados em memória durante a execução da aplicação.

O Sistema permite realizar todas as Operações do CRUD (Create, Read, Update e Delete), com os Objetos das Classes Conta Corrente e Conta Poupança, além das Operações Bancárias Básicas (Saque, Depósito e Transferência entre Contas).

<br />

## Diagrama de Classes

```mermaid
classDiagram
class Conta {
  - numero: number
  - agencia: number
  - tipo: number
  - titular: string
  - saldo: number
  + getNumero() number
  + getAgencia() number
  + getTipo() number
  + getTitular() string
  + getSaldo() number
  + setNumero(numero: number) void
  + setAgencia(agencia: number) void
  + setTipo(tipo: number) void
  + setTitular(titular: string) void
  + setSaldo(saldo: number) void
  + sacar(valor: number) boolean
  + depositar(valor: number) void
  + visualizar() void
}
class ContaCorrente {
  - limite: number
  + getLimite() number
  + setLimite(limite: number) number
  + sacar(valor: number) boolean
  + visualizar() void
}
class ContaPoupanca {
  - aniversario: number
  + getAniversario() number
  + setAniversario(aniversario: number) void
  + visualizar() void
}
ContaCorrente --> Conta
ContaPoupanca --> Conta
```

<br />

## Bibliotecas

- npm install -g typescript
- npm install -g ts-node
- npm install prompt-sync
- npm install @types/prompt-sync
- npm install --save-dev @types/node
- npm install readline-sync

<br />

## Executar o projeto

1. Abra o Terminal
2. Digite o comando: `npm install` na pasta raiz do projeto para instalar as Bibliotecas.
3. Digite o comando: `tsc --init` para inicializar o TypeScript.
4. Digite o comando `ts-node Menu.ts` para executar o projeto.

<br />

## Menu do Projeto

<div align="center">
   <img src="https://i.imgur.com/MFK9yXB.png" title="source: imgur.com" width="90%"/>
</div>

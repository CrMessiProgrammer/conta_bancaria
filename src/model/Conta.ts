import { colors } from "../util/Colors";

// 'abstract' torna a classe abstrata (oculta, não possibilitando instanciar)
export abstract class Conta {

    // Modelo de dados (Características - Atributos / Comportamentos)
    private _numero: number;    // boas práticas colocar o '_' para identificar que é algo privado
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Gerar o Método Construtor (responsável por criar novos Objetos baseados no modelo definido da Classe, o termo utilizado é, Instanciar um Novo Objeto)
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    
    // Gerar os Métodos Getter's (obter) e Setter's (modificar)
    // Métodos Get (usados para obter o valor atual de um atributo de um objeto, de forma indireta)
    public get numero(): number {
        return this._numero;
    }
    
    public get agencia(): number {
        return this._agencia;
    }
    
    public get tipo(): number {
        return this._tipo;
    }
    
    public get titular(): string {
        return this._titular;
    }
    
    public get saldo(): number {
        return this._saldo;
    }
    
    // Métodos Set (usados para definir/configurar um novo valor para um atributo de um objeto (alterá-los), de forma indireta)
    public set numero(value: number) {
        this._numero = value;
    }

    public set agencia(value: number) {
        this._agencia = value;
    }

    public set tipo(value: number) {
        this._tipo = value;
    }

    public set titular(value: string) {
        this._titular = value;
    }

    public set saldo(value: number) {
        this._saldo = value;
    }

    // Método Auxiliar (ação)
    public sacar(valor: number): boolean{
        if (valor > this._saldo) {
            console.log(colors.fg.redstrong, "\nSaldo Insuficiente!", colors.reset);
            return false;            
        }
        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number){
        this._saldo += valor;
    }

    // Para ver todos os dados da conta na tela
    public visualizar() {

        let tipo: string;

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
            default:
                tipo = colors.fg.redstrong, "\nTipo Inválido", colors.reset;
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta");
        console.log("*****************************************************");
        console.log(`Numero da Conta: ${this._numero}`);
        console.log(`Agência: ${this._agencia}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Saldo: ${this._saldo}`);
    }

}
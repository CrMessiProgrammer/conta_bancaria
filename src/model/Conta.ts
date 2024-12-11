export class Conta {

    // Modelo de dados (Atributos)
    private _numero: number;    // boas práticas por '_' para identificar que é algo privado
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Gerar o Método Construtor
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }

    // Gerar os Métodos Getter's e Setter's
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

    public sacar(valor: number): boolean{
        if (valor > this._saldo) {
            console.log("Saldo Insuficiente!");
            return false;            
        }
        this._saldo -= valor;
        return true;
    }

    public depositar(valor: number){
        this._saldo += valor;
    }


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
                tipo = "Tipo Inválido";
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
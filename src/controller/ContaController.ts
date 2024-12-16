import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    // Coleção Array que vai armazenar os Objetos Conta
    private listaContas = new Array<Conta>();

    // Controlar os Números das Contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log("\nConta não encontrada!");

    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    // Recebe como parâmetro um Objeto da classe Conta
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi cadastrada com sucesso!");

    }

    // Tive que pegar 'numero' de dentro da Conta, porque não passei como parâmetro (a ideia é pegar os dados, e substituir)
    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null){
            // Bucando a conta por meio do índice
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("A Conta foi atualizada com sucesso!");
        } else 
            console.log("\nConta não encontrada!");
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null){
            // Deletando a conta por meio do 'splice' e apagando somente 1 elemento, e bucando a conta por meio do índice ('indexOf')
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A Conta foi Deletada com sucesso!");
        } else 
            console.log("\nConta não encontrada!");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    // Métodos Auxiliares
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }

}
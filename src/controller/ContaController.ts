import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";

export class ContaController implements ContaRepository {
    
    // Coleção Array que vai armazenar os Objetos Conta
    private listaContas = new Array<Conta>();
    
    // Controlar os Números das Contas
    public numero: number = 0;

    procurarPorTitular(titular: string): void {

        // Filtragem dos Dados
        let buscaPorTitular = this.listaContas.filter( conta => conta.titular.toUpperCase().includes(titular.toUpperCase()))

        // Listagem dos Dados
        buscaPorTitular.forEach( conta => conta.visualizar() );
    }

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null)
            buscaConta.visualizar();
        else
            console.log(colors.fg.redstrong, "\nConta não encontrada!", colors.reset);
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    // Recebe como parâmetro um Objeto da classe Conta
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.greenstrong, "\nA Conta foi cadastrada com sucesso!", colors.reset);

    }

    // Tive que pegar 'numero' de dentro da Conta, porque não passei como parâmetro (a ideia é pegar os dados, e substituir)
    atualizar(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            // Bucando a conta por meio do índice
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.greenstrong, "\nA Conta foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.redstrong, "\nConta não encontrada!", colors.reset);
    }

    deletar(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            // Deletando a conta por meio do 'splice' e apagando somente 1 elemento, e bucando a conta por meio do índice ('indexOf')
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.redstrong, `\nConta Nº ${buscaConta.numero} (Titular: ${buscaConta.titular}) -> Deletada com Sucesso!`, colors.reset);
        } else
            console.log(colors.fg.redstrong, "\nConta não encontrada!", colors.reset);
    }

    // Métodos Bancários
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        // O método é boolean
        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true) {
                console.log(colors.fg.greenstrong, "\nO Saque foi efetuado com sucesso!", colors.reset);
            }
        } else
            console.log(colors.fg.redstrong, "\nConta não encontrada!", colors.reset);
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor);
            console.log(colors.fg.greenstrong, "\nO Depósito foi efetuado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.redstrong, "\nConta não encontrada!", colors.reset);
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log(`\nTransferência de:\nTitular: ${contaOrigem.titular} (Conta Nº ${contaOrigem.numero}) para Titular: ${contaDestino.titular} (Conta Nº ${contaDestino.numero}) -> Efetuada com Sucesso!`);
            }
        } else
            console.log(colors.fg.redstrong, "\nConta de Origem e/ou Conta de Destino não foi encontrada!", colors.reset);
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
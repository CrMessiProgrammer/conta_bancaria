import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

// função main = principal (inicializar o programa sempre por aqui) 
export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, numeroDestino, valor: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupança'];

    // Criando um Objeto da Classe ContaController
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, 2, "Jean Lima", 15000, 15));

    while (true) {

        console.log(colors.bg.black, colors.fg.green);
        console.log("***************************************************");
        console.log("                                                   ");
        console.log("                  Banco Rinthians                  ");
        console.log("                O + Fiel do Brasil!                ");
        console.log("                                                   ");
        console.log("***************************************************");
        console.log("                                                   ");
        console.log("           1 - Criar Conta                         ");
        console.log("           2 - Listar Todas as Contas              ");
        console.log("           3 - Buscar Conta por Numero             ");
        console.log("           4 - Atualizar Dados da Conta            ");
        console.log("           5 - Apagar Conta                        ");
        console.log("           6 - Sacar                               ");
        console.log("           7 - Depositar                           ");
        console.log("           8 - Transferir Valores entre Contas     ");
        console.log("           9 - Sair                                ");
        console.log("                                                   ");
        console.log("***************************************************");
        console.log("                                                   ");

        console.log("Entre com a opção desejada: ", colors.reset);  // reset para de exibir a cor
        opcao = readlinesync.questionInt();

        if (opcao === 9) {
            console.log("\nBanco Rinthians - O Banco mais Fiel do Brasil");
            about();
            process.exit(0);    // sair do programa
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\nCriar Conta\n", colors.reset);

                console.log("Digite o Número da Agência: ");
                agencia = readlinesync.questionInt('');

                console.log("Digite o Nome do Titular: ");
                titular = readlinesync.question('');

                // 'cancel: false' faz com que a resposta do usuário seja obrigatória (sem possibilidade de cancelar)
                console.log("escolha o Tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da Conta: ");
                saldo = readlinesync.questionFloat('');

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta: ");
                        limite = readlinesync.questionFloat('');
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do Aniversário da Poupança: ");
                        aniversario = readlinesync.questionInt('');
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress();
                break;
            case 2:
                console.log(colors.fg.whitestrong, "\nListar Todas as Contas\n", colors.reset);

                contas.listarTodas();
                keyPress();

                break;
            case 3:
                console.log(colors.fg.whitestrong, "\nBuscar Conta por Numero\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log("\nAtualizar Dados da Conta\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                let conta = contas.buscarNoArray(numero);

                if (conta !== null) {

                    console.log("Digite o novo Número da Agência: ");
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o novo Nome do Titular: ");
                    titular = readlinesync.question('');

                    console.log("Digite o novo Saldo da Conta: ");
                    saldo = readlinesync.questionFloat('');

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log("Digite o novo Limite da Conta: ");
                            limite = readlinesync.questionFloat('');
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o novo Dia do Aniversário da Poupança: ");
                            aniversario = readlinesync.questionInt('');
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    }

                } else {
                    console.log("Conta não encontrada!");
                }
                keyPress();
                break;
            case 5:
                console.log("\nApagar Conta\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.deletar(numero);

                keyPress();
                break;
            case 6:
                console.log("\nSaque\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o valor do Saque: ");
                valor = readlinesync.questionFloat('');

                contas.sacar(numero, valor);

                keyPress();
                break;
            case 7:
                console.log("\nDepósito\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o valor do Depósito: ");
                valor = readlinesync.questionFloat('');

                contas.depositar(numero, valor);

                keyPress();
                break;
            case 8:
                console.log("\nTransferir Valores entre Contas\n");

                console.log("Digite o número da conta de origem: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o número da conta de destino: ");
                numeroDestino = readlinesync.questionInt('');

                console.log("Digite o valor da Transferência: ");
                valor = readlinesync.questionFloat('');

                contas.transferir(numero, numeroDestino, valor);

                keyPress();
                break;
            default:
                console.log("Opção Inválida!");
                keyPress();
                break;
        }
    }
}

export function about(): void {
    console.log("\n***************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Carlos Henrique Nunes - teste@gmail.com");
    console.log("https://github.com/CrMessiProgrammer");
    console.log("***************************************************\n");
}

// Cria uma pausa no terminal para o usuário
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

// Chamada para a função 'main()', no qual ela será executada automaticamente quando executar o código
main();
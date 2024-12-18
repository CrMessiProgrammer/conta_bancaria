import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
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

        console.log("                                                       ");
        console.log(colors.bg.whitebright, colors.fg.bluestrong, "***************************************************  ");
        console.log("                                                       ");
        console.log("                    Banco InovTech                     ");
        console.log("                  O + Tech do Brasil!                  ");
        console.log("                                                       ");
        console.log("  ***************************************************  ");
        console.log("                                                       ");
        console.log("             1 - Criar Conta                           ");
        console.log("             2 - Listar Todas as Contas                ");
        console.log("             3 - Buscar Conta por Numero               ");
        console.log("             4 - Atualizar Dados da Conta              ");
        console.log("             5 - Apagar Conta                          ");
        console.log("             6 - Sacar                                 ");
        console.log("             7 - Depositar                             ");
        console.log("             8 - Transferir Valores entre Contas       ");
        console.log("             9 - Buscar Conta por Titular              ");
        console.log("             0 - Sair                                  ");
        console.log("                                                       ");
        console.log("  ***************************************************  ");
        console.log("                                                       ");

        console.log("Entre com a opção desejada:                           ", colors.reset);  // reset para de exibir a cor
        opcao = readlinesync.questionInt();

        if (opcao === 0) {
            console.log(colors.fg.yellowstrong, "                                                     ");
            console.log("Banco InovTech -> O Banco + Tech do Brasil!\n");
            about();
            process.exit(0);    // sair do programa
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.greenstrong, "\nCriar Conta\n");

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
                        while (true) {
                            console.log("Digite o Dia do Aniversário da Poupança: ");
                            aniversario = readlinesync.questionInt('');
                            if (aniversario >= 1 && aniversario <= 28) {
                                contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                                break;
                            } else {
                                console.log(colors.fg.redstrong, "\nValor Inválido! Digite o Dia do Aniversário da Poupança entre 1 e 28.\n", colors.reset);
                            }
                        }
                }

                keyPress();
                console.log(colors.reset);
                break;
            case 2:
                console.log(colors.fg.greenstrong, "\nListar Todas as Contas\n");

                contas.listarTodas();

                keyPress();
                console.log(colors.reset);
                break;
            case 3:
                console.log(colors.fg.greenstrong, "\nConsultar dados da Conta - por número\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.procurarPorNumero(numero);

                keyPress();
                console.log(colors.reset);
                break;
            case 4:
                console.log(colors.fg.greenstrong, "\nAtualizar Dados da Conta\n");

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
                console.log(colors.reset);
                break;
            case 5:
                console.log(colors.fg.greenstrong, "\nApagar Conta\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.deletar(numero);

                keyPress();
                console.log(colors.reset);
                break;
            case 6:
                console.log(colors.fg.greenstrong, "\nSaque\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o valor do Saque: ");
                valor = readlinesync.questionFloat('');

                contas.sacar(numero, valor);

                keyPress();
                console.log(colors.reset);
                break;
            case 7:
                console.log(colors.fg.greenstrong, "\nDepósito\n");

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                while (true) {
                    console.log("Digite o valor do Depósito: ");
                    valor = readlinesync.questionFloat('');
                    if (valor <= 0) {
                        console.log(colors.fg.redstrong, "\nValor Inválido! Digite novamente.\n", colors.reset);
                    } else {
                        contas.depositar(numero, valor);
                        break;
                    }    
                }
                
                keyPress();
                console.log(colors.reset);
                break;
            case 8:
                console.log(colors.fg.greenstrong, "\nTransferência entre Contas\n");

                console.log("Digite o número da conta de origem: ");
                numero = readlinesync.questionInt('');

                console.log("Digite o número da conta de destino: ");
                numeroDestino = readlinesync.questionInt('');

                console.log("Digite o valor da Transferência: ");
                valor = readlinesync.questionFloat('');

                contas.transferir(numero, numeroDestino, valor);

                keyPress();
                console.log(colors.reset);
                break;
            case 9:
                console.log(colors.fg.greenstrong, "\nConsulta pelo Titular\n");

                console.log("Digite o nome do Titular: ");
                titular = readlinesync.question('');

                contas.procurarPorTitular(titular);

                keyPress();
                console.log(colors.reset);
                break;
            default:
                console.log(colors.fg.redstrong, "\nOpção Inválida!", colors.reset);
                keyPress();
                break;
        }
    }
}

export function about(): void {
    console.log(colors.bg.yellowbright, colors.fg.black, "                                                     ");
    console.log("  ***************************************************  ");
    console.log("   Projeto Desenvolvido por:                           ");
    console.log("   Carlos Henrique Nunes - teste@gmail.com             ");
    console.log("   https://github.com/CrMessiProgrammer                ");
    console.log("  ***************************************************  ");
    console.log("                                                     ", colors.reset);
}

// Cria uma pausa no terminal para o usuário
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

// Chamada para a função 'main()', no qual ela será executada automaticamente quando executar o código
main();
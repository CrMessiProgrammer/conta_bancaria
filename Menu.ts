import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

// função main = principal (inicializar o programa sempre por aqui) 
export function main() {

    let opcao: number;

    // Crias novas Instâncias (Objetos) da Classe 'Conta'
    const c1 = new Conta(1, 123, 1, "Carlos", 100000);
    c1.visualizar();
    
    // Saque
    console.log(c1.sacar(200000.00));
    c1.visualizar();

    const c2 = new Conta(2, 123, 2, "Aline", 200000);
    c2.visualizar();
    
    // Depósito
    c2.depositar(100.00);
    c2.visualizar();

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
                console.log("\nCriar Conta\n");
                break;
            case 2:
                console.log("\nListar Todas as Contas\n");
                break;
            case 3:
                console.log("\nBuscar Conta por Numero\n");
                break;
            case 4:
                console.log("\nAtualizar Dados da Conta\n");
                break;
            case 5:
                console.log("\nApagar Conta\n");
                break;
            case 6:
                console.log("\nSacar\n");
                break;
            case 7:
                console.log("\nDepositar\n");
                break;
            case 8:
                console.log("\nTransferir Valores entre Contas\n");
                break;
            default:
                console.log("Opção Inválida!");
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

// Chamada para a função 'main()', no qual ela será executada automaticamente quando executar o código
main();
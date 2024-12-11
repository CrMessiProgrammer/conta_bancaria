import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';

export function main() {

    let opcao: number;

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
            process.exit(0);
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

main();
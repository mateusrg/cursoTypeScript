import * as leitor from "readline-sync"
import banco from "./db"

export class Farmacia {
    // Inserção de medicamentos
    async setMedicamentos(): Promise<void> {
        let nome: string = leitor.question("Qual o nome do medicamento que voce quer inserir no estoque? ");
        let quantidadeEmEstoque: number = leitor.questionInt("Tem quantas unidades desse medicamento? ");
        let precoPorUnidade: number;
        while(true) {
            precoPorUnidade = parseFloat(leitor.question("Quanto esse medicamento vai custar? "));
            if (!isNaN(precoPorUnidade)) {
                break
            }
            console.log("Valor invalido");
        }
        await executeDatabaseQuery("INSERT INTO medicamentos(nome, quantidade_em_estoque, preco_por_unidade) VALUES (?, ?, ?)", [nome, quantidadeEmEstoque, precoPorUnidade]);
        console.log(nome, "cadastrado");
    }

    // Visualização do Estoque
    async getMedicamentos(): Promise<void> {
        const medicamentos = await executeDatabaseQuery("SELECT * FROM medicamentos");
        console.log("Medicamentos cadastrados:");
        medicamentos.forEach(({id_medicamento, nome, quantidade_em_estoque, preco_por_unidade}: any) => {
            console.log(`ID: ${id_medicamento}\nNome: ${nome}\nQuantidade em Estoque: ${quantidade_em_estoque}\nPreco por Unidade: ${preco_por_unidade}\n\n`);
        });
    }

    // Remoção de Medicamentos
    async removerMedicamentos(): Promise<void> {
        const medicamentos = await executeDatabaseQuery("SELECT * FROM medicamentos");
        medicamentos.forEach(({id_medicamento, nome}: any) => {
            console.log(`${id_medicamento}- ${nome}`);
        });
        let id: number
        while (true) {
            id = leitor.questionInt("Qual o ID do medicamento a ser removido? ");
            try {
                await executeDatabaseQuery("DELETE FROM medicamentos WHERE id_medicamento = ?", [id]);
                break
            } catch (_) {
                console.log("ID invalido.");
            }
        }
        console.log("Medicamento removido");
    }

    // Substituição de Medicamentos
    async substituirMedicamento(): Promise<void> {
        const medicamentos = await executeDatabaseQuery("SELECT * FROM medicamentos");
        medicamentos.forEach(({id_medicamento, nome}: any) => {
            console.log(`${id_medicamento}- ${nome}`);
        });
        let id_remover: number
        while (true) {
            id_remover = leitor.questionInt("Qual o ID do medicamento que voce quer substituir?");
            try {
                await executeDatabaseQuery("DELETE FROM medicamentos WHERE id_medicamento = ?", [id_remover]);
                break
            } catch (_) {
                console.log("ID invalido.");
            }
        }
        console.log("Quanto ao medicamento a ser inserido no lugar:");
        await this.setMedicamentos();
        console.log("Substituicao feita");
    }

    // Compra de Medicamentos
    async comprarMedicamento(): Promise<void> {
        const medicamentos = await executeDatabaseQuery("SELECT * FROM medicamentos");
        medicamentos.forEach(({id_medicamento, nome}: any) => {
            console.log(`${id_medicamento}- ${nome}`);
        });
        let id: number, quant: number, preco_pago: number, dinheiro: number, dinheiro_parcial: any;
        while (true) {
            id = leitor.questionInt("Qual o ID do medicamento a ser comprado? ");
            quant = leitor.questionInt("Quantas unidades do medicamento serão compradas? ");
            preco_pago = leitor.questionFloat("Quanto a farmacia pagou no total pelos medicamentos? ");
            dinheiro_parcial = await executeDatabaseQuery("SELECT dinheiro FROM caixa");
            dinheiro = parseFloat(dinheiro_parcial[0].dinheiro);
            if (preco_pago > dinheiro) {
                console.log("Nao ha dinheiro suficiente em caixa para comprar esse remedio.");
                return
            }
            try {
                await executeDatabaseQuery("UPDATE medicamentos SET quantidade_em_estoque = quantidade_em_estoque + ? WHERE id_medicamento = ?", [quant, id]);
                await executeDatabaseQuery("UPDATE caixa SET dinheiro = dinheiro - ?", [preco_pago]);
                console.log("Compra realizada com sucesso!");
                break
            } catch (_) {
                console.log("ID invalido.");
            }
        }
    }

    // Venda de Medicamentos
    async venderMedicamento(): Promise<void> {
        const medicamentos = await executeDatabaseQuery("SELECT * FROM medicamentos");
        medicamentos.forEach(({id_medicamento, nome}: any) => {
            console.log(`${id_medicamento}- ${nome}`);
        });
        let id: number, quant: number, preco_medicamento: any, preco: number, preco_final: number, estoque: number, estoque_provisorio: any;
        while (true) {
            id = leitor.questionInt("Qual o ID do medicamento a ser vendido? ");
            quant = leitor.questionInt("Quantas unidades do medicamento serão vendidas? ");
            estoque_provisorio = await executeDatabaseQuery("SELECT quantidade_em_estoque FROM medicamentos WHERE id_medicamento = ?", [id]);
            estoque = estoque_provisorio[0].quantidade_em_estoque;
            preco_medicamento = await executeDatabaseQuery("SELECT preco_por_unidade FROM medicamentos WHERE id_medicamento = ?", [id]);
            preco  = preco_medicamento[0].preco_por_unidade;
            preco_final = quant * preco;
            if (estoque < quant) {
                console.log(`Voce esta tentando vender ${quant} unidades do medicamento, mas tem apenas ${estoque} em estoque`);
                return
            }
            try {
                await executeDatabaseQuery("UPDATE medicamentos SET quantidade_em_estoque = quantidade_em_estoque - ? WHERE id_medicamento = ?", [quant, id]);
                await executeDatabaseQuery("UPDATE caixa SET dinheiro = dinheiro + ?", [preco_final]);
                break
            } catch (_) {
                console.log("ID invalido.");
            }
        }
    }

    // Visualização do Dinheiro
    async getDinheiro(): Promise<void> {
        let dinheiro_atual_provisorio: any = await executeDatabaseQuery("SELECT dinheiro FROM caixa");
        let dinheiro_atual: number = dinheiro_atual_provisorio[0].dinheiro;
        console.log(`Dinheiro em caixa: ${dinheiro_atual}`);        
    }
}

async function executeDatabaseQuery(query: string, params: Array<any> = []): Promise<any> {
    try {
        return await banco.execute(query, params);
    } catch (err) {
        console.error("Erro na consulta: ", err);
    }
}
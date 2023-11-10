"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Farmacia = void 0;
const leitor = __importStar(require("readline-sync"));
const db_1 = __importDefault(require("./db"));
class Farmacia {
    setMedicamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            let nome = leitor.question("Qual o nome do medicamento que voce quer inserir no estoque? ");
            let quantidadeEmEstoque = leitor.questionInt("Tem quantas unidades desse medicamento? ");
            let precoPorUnidade;
            while (true) {
                precoPorUnidade = parseFloat(leitor.question("Quanto esse medicamento vai custar? "));
                if (!isNaN(precoPorUnidade)) {
                    break;
                }
                console.log("Valor invalido");
            }
            yield executeDatabaseQuery("INSERT INTO medicamentos(nome, quantidade_em_estoque, preco_por_unidade) VALUES (?, ?, ?)", [nome, quantidadeEmEstoque, precoPorUnidade]);
            console.log(nome, "cadastrado");
        });
    }
    getMedicamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentos = yield executeDatabaseQuery("SELECT * FROM medicamentos");
            console.log("Medicamentos cadastrados:");
            medicamentos.forEach(({ id_medicamento, nome, quantidade_em_estoque, preco_por_unidade }) => {
                console.log(`ID: ${id_medicamento}\nNome: ${nome}\nQuantidade em Estoque: ${quantidade_em_estoque}\nPreco por Unidade: ${preco_por_unidade}\n\n`);
            });
        });
    }
    removerMedicamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentos = yield executeDatabaseQuery("SELECT * FROM medicamentos");
            medicamentos.forEach(({ id_medicamento, nome }) => {
                console.log(`${id_medicamento}- ${nome}`);
            });
            let id;
            while (true) {
                id = leitor.questionInt("Qual o ID do medicamento a ser removido? ");
                try {
                    yield executeDatabaseQuery("DELETE FROM medicamentos WHERE id_medicamento = ?", [id]);
                    break;
                }
                catch (_) {
                    console.log("ID invalido.");
                }
            }
            console.log("Medicamento removido");
        });
    }
    substituirMedicamento() {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentos = yield executeDatabaseQuery("SELECT * FROM medicamentos");
            medicamentos.forEach(({ id_medicamento, nome }) => {
                console.log(`${id_medicamento}- ${nome}`);
            });
            let id_remover;
            while (true) {
                id_remover = leitor.questionInt("Qual o ID do medicamento que voce quer substituir?");
                try {
                    yield executeDatabaseQuery("DELETE FROM medicamentos WHERE id_medicamento = ?", [id_remover]);
                    break;
                }
                catch (_) {
                    console.log("ID invalido.");
                }
            }
            console.log("Quanto ao medicamento a ser inserido no lugar:");
            yield this.setMedicamentos();
            console.log("Substituicao feita");
        });
    }
    comprarMedicamento() {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentos = yield executeDatabaseQuery("SELECT * FROM medicamentos");
            medicamentos.forEach(({ id_medicamento, nome }) => {
                console.log(`${id_medicamento}- ${nome}`);
            });
            let id, quant, preco_pago, dinheiro, dinheiro_parcial;
            while (true) {
                id = leitor.questionInt("Qual o ID do medicamento a ser comprado? ");
                quant = leitor.questionInt("Quantas unidades do medicamento serão compradas? ");
                preco_pago = leitor.questionFloat("Quanto a farmacia pagou no total pelos medicamentos? ");
                dinheiro_parcial = yield executeDatabaseQuery("SELECT dinheiro FROM caixa");
                dinheiro = parseFloat(dinheiro_parcial[0].dinheiro);
                if (preco_pago > dinheiro) {
                    console.log("Nao ha dinheiro suficiente em caixa para comprar esse remedio.");
                    return;
                }
                try {
                    yield executeDatabaseQuery("UPDATE medicamentos SET quantidade_em_estoque = quantidade_em_estoque + ? WHERE id_medicamento = ?", [quant, id]);
                    yield executeDatabaseQuery("UPDATE caixa SET dinheiro = dinheiro - ?", [preco_pago]);
                    console.log("Compra realizada com sucesso!");
                    break;
                }
                catch (_) {
                    console.log("ID invalido.");
                }
            }
        });
    }
    venderMedicamento() {
        return __awaiter(this, void 0, void 0, function* () {
            const medicamentos = yield executeDatabaseQuery("SELECT * FROM medicamentos");
            medicamentos.forEach(({ id_medicamento, nome }) => {
                console.log(`${id_medicamento}- ${nome}`);
            });
            let id, quant, preco_medicamento, preco, preco_final, estoque, estoque_provisorio;
            while (true) {
                id = leitor.questionInt("Qual o ID do medicamento a ser vendido? ");
                quant = leitor.questionInt("Quantas unidades do medicamento serão vendidas? ");
                estoque_provisorio = yield executeDatabaseQuery("SELECT quantidade_em_estoque FROM medicamentos WHERE id_medicamento = ?", [id]);
                estoque = estoque_provisorio[0].quantidade_em_estoque;
                preco_medicamento = yield executeDatabaseQuery("SELECT preco_por_unidade FROM medicamentos WHERE id_medicamento = ?", [id]);
                preco = preco_medicamento[0].preco_por_unidade;
                preco_final = quant * preco;
                if (estoque < quant) {
                    console.log(`Voce esta tentando vender ${quant} unidades do medicamento, mas tem apenas ${estoque} em estoque`);
                    return;
                }
                try {
                    yield executeDatabaseQuery("UPDATE medicamentos SET quantidade_em_estoque = quantidade_em_estoque - ? WHERE id_medicamento = ?", [quant, id]);
                    yield executeDatabaseQuery("UPDATE caixa SET dinheiro = dinheiro + ?", [preco_final]);
                    break;
                }
                catch (_) {
                    console.log("ID invalido.");
                }
            }
        });
    }
    getDinheiro() {
        return __awaiter(this, void 0, void 0, function* () {
            let dinheiro_atual_provisorio = yield executeDatabaseQuery("SELECT dinheiro FROM caixa");
            let dinheiro_atual = dinheiro_atual_provisorio[0].dinheiro;
            console.log(`Dinheiro em caixa: ${dinheiro_atual}`);
        });
    }
}
exports.Farmacia = Farmacia;
function executeDatabaseQuery(query, params = []) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.default.execute(query, params);
        }
        catch (err) {
            console.error("Erro na consulta: ", err);
        }
    });
}

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
Object.defineProperty(exports, "__esModule", { value: true });
const leitor = __importStar(require("readline-sync"));
const Classes_1 = require("./Classes");
let farmacia = new Classes_1.Farmacia;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        while (true) {
            yield farmacia.getDinheiro();
            console.log("O que voce quer fazer?");
            console.log("[1] Vender medicamento");
            console.log("[2] Comprar medicamento");
            console.log("[3] Substituir medicamento");
            console.log("[4] Remover medicamento");
            console.log("[5] Inserir medicamento");
            console.log("[6] Visualizar estoque");
            console.log("[7] Sair");
            let selecao = leitor.questionInt();
            switch (selecao) {
                case 1:
                    yield farmacia.venderMedicamento();
                    break;
                case 2:
                    yield farmacia.comprarMedicamento();
                    break;
                case 3:
                    yield farmacia.substituirMedicamento();
                    break;
                case 4:
                    yield farmacia.removerMedicamentos();
                    break;
                case 5:
                    yield farmacia.setMedicamentos();
                    break;
                case 6:
                    yield farmacia.getMedicamentos();
                    break;
                case 7:
                    console.log("Tchau!");
                    process.exit(0);
                default:
                    console.log("\nOpcao invalida\n");
            }
        }
    });
}
main();

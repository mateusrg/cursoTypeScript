"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
function main() {
    var aluno = new Aluno_1.Aluno("Jorge");
    for (var i = 0; i < 3; i++) {
        aluno.setNotas();
    }
    aluno.getMedia();
}
main();

import { Aluno } from "./Aluno";

function main(): void {
    const aluno = new Aluno("Jorge")
    for (let i = 0; i < 3; i++) {
        aluno.setNotas()
    }
    aluno.getMedia()
}

main()
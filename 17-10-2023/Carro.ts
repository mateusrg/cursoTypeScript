export class Carro {
    consumo: number;
    marca: String;
    modelo: String;
    ano: number;
    quantidade: number = 0;
    combustivel: number

    constructor(consumo: number, marca: String, modelo: String, ano: number) {
        this.consumo = consumo
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.combustivel = 0
    }

    viajar(km: number): void {
        let viagem = this.combustivel - km/this.consumo
        if(viagem <= 0) {
            console.log("Nao eh possivel fazer essa viagem, abasteca seu carro.");
        } else {
            this.combustivel -= viagem
            console.log(`Sobrou ${this.combustivel} litros de gasolina.`);
        }
    }

    setCombustivel(gasolina: number): void {
        this.combustivel += gasolina
        this.getCombustivel()
    }

    getCombustivel(): void {
        console.log(`Seu tanque está com ${this.combustivel} litros de gasolina`);
    }

    getValues(): void {
        console.log(`Consumo de gasolina (km/L): ${this.consumo}`);
        console.log(`Marca do carro: ${this.marca}`);
        console.log(`Modelo do carro: ${this.modelo}`);
        console.log(`Ano do carro: ${this.ano}`);
    }
}
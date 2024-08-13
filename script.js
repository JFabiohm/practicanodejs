class Auto {
    constructor(marca, modelo, year) {
        this.marca=marca;
        this.modelo=modelos;
        this.year=year;
    
    }
    mostrarAuto(){
       return console.log( `este vehiculo es ${this.marca} ${this.modelo} ${this.year}`)
    }
}

const miCarroToyota = new  Auto('Toyota', 'Corolla', 2024);
const miCarroHyunday = new  Auto('Hyunday', 'Elantra', 2024);
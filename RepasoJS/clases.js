class coche {
    constructor(model, velocity, antiguedad) {
        this.model = model;
        this.velocity = velocity;
        this.antiguedad = antiguedad;
    }
    aumentarVelocida() {
        this.velocity++
    }
    disminuirVelocida() {
        this.velocity--
    }
}

class AutoBus extends coche {
    constructor(model, velocity, antiguedad, altura) {

        super(model, velocity, antiguedad);
        this.altura = 5;
    }
    mostrarAltura(){
        return "la altura del bys es "+this.altura;
    }

}
var bus1 = new AutoBus('pagasus', 200, 2017);
var coche1 = new coche('BMW', 200, 2017);
var coche2 = new coche('Audi', 210, 2018);
var coche3 = new coche('Mercedes', 200, 2017);
var coche4 = new coche('renault', 200, 2017);

console.log(bus1);
document.write('<h1>velocidad ' + coche1.velocity + "</h1>")
coche1.disminuirVelocida();
coche1.disminuirVelocida();
coche1.disminuirVelocida();

document.write("<h1>velocidad" + coche1.velocity + "</h1>")
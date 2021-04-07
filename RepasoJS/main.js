var nombre = "Jose Johel Rodriguez";
var altura = 176;

var concatenacion = nombre + " " + altura;

document.write(concatenacion);

if (altura >= 160) {
    datos.innerHTML += "<h1>Eres una persona alta </h1>";
} else {
    datos.innerHTML += "<h1>Eres una persona baja </h1>";
}
/*
for(var i=2000; i<=2020;i++){
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año:"+i;
}
*/

function muestraMiNombre(nombre, altura) {
    var misDatos = `
    <h1>soy la caja de datos</h1>
    <h2>mi nombre es: ${nombre}</h2>
    <h3>mido: ${altura} cm </h3>
    `;
    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML += muestraMiNombre("Johel", 176);
}

imprimir();

var nombres = ['Johel', 'Jose', 'JJ'];

document.write('<h1>Listado de nombres </h1>');

for (var i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br>');
}


nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
});


//Objetos Json o literales
var coche = {
modelo: 'Mercedes Clase A',
maxima: 500 ,
antiguedad: 2021 ,
mostrarDatos(){
    console.log(this.modelo, this.maxima, this.antiguedad);
},
propiedad1: "valor aleatorio",
};

document.write("<h1>"+coche.antiguedad+"</h1>");
coche.mostrarDatos();


//promesas

var saluda = new Promise((resolve,reject) => {
    setTimeout(()=> {
        let saludo = "hola muy buenos dias"
        saludo = false;
        if(saludo){
            resolve(saludo)
        }else{
            reject('no Hay Saludo')
        }
    },2000);
});

saluda.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err)
});

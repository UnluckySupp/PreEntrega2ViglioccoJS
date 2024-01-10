const productos = [
  { id: 1, nombre: "Lavarropa", precio: 8000 },
  { id: 2, nombre: "Heladera", precio: 9000 },
  { id: 3, nombre: "Televisor", precio: 12000 },
];
const cuota={"1":1000,"3":1.12,"6":1.25,"12":1.52}
let compras = [];
let cuotas;
let productoEncontrado;
let productoAComprar;

//Ingresar nombre y edad para acceder a las compras
let nombre = prompt("Ingrese un nombre");
alert(`Bienvenido ${nombre}`);
let edad = Number(prompt("Ingrese su edad"));
if (edad <= 17) {
  alert("Eres menor de edad, no puedes realizar compras.");
} else {
  alert("Eres mayor de edad. Ingresando al catálogo de compras.");
  carrito();
}

//Función del carrito
function carrito() {
  let auxiliar = `true`;
  while (auxiliar === "true") {
    let producto = prompt("Qué producto te interesa comprar?");
    productoEncontrado=productos.filter(product=>product.nombre==producto)
    if(productoEncontrado.length!=0){
      productoAComprar=productoEncontrado[0];
      alert(`El precio del ${producto} es ${productoEncontrado[0].precio} pesos.`);
      cuotas =prompt("En cuántas cuotas deseas pagar? Elige 1, 3, 6 o 12");
      if(cuota[cuotas]){
        let total
        productoAComprar.cuota=cuotas
        if(cuotas=="1"){
          total=productoEncontrado[0].precio-cuota[cuotas];
        }else{
          total=productoEncontrado[0].precio*cuota[cuotas];
        }
        productoAComprar.total=total
        compras.push(productoAComprar);
      }else{
        alert("Numero de cuotas invalido");
      }
    }else {
      alert("El producto que escribiste no existe");
    }
    console.log(compras);
    let continuar = prompt("Quieres seguir comprando? Ingrese si");
    if (continuar != `si`) {
      auxiliar = `false`;
    }
  }
}

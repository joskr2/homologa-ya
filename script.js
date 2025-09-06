// @ts-nocheck
// Variables básicas
let insumo = "Bolsa de cemento";
let edad = 29;
let esHombre = false;
let pi = 3.14159;

// Objeto
let misDatos = {
  nombre: "Josue",
  edad: 29,
  esHombre: true,
};

// Acceso a propiedad del objeto
let miNombre = misDatos.nombre;
console.log(miNombre);

// Arrays
let listaDePrecios = [21.4, 45.44, 56, 21, 34, 12, 3];
let nuevosProveedores = ["Proveedor 1", "Proveedor 2"];

// Array de objetos
let misLicitaciones = [
  {
    id: 12234,
    nombreProvedor: "Mi proveedor 1",
    activo: true,
    productos: [
      {
        id: "12222222222-adassss-111222",
        nombre: "Bolsa de cemento",
        estaEnStock: false,
      },
    ],
  },
  {
    id: 56789,
    nombreProvedor: "Mi proveedor 2",
    activo: true,
    productos: [
      {
        id: "987654321-adassss-333444",
        nombre: "Fierro de construcción",
        estaEnStock: true,
      },
    ],
  },
];


const botonEmpezarHomologar = document.getElementById(
  "btn-empezar-homologacion"
);


botonEmpezarHomologar.style = "background:green";

botonEmpezarHomologar.addEventListener( 'click', () => {
  alert("Empezo la homologacion")
})


console.log(botonEmpezarHomologar)


// vas a acrear una variable con tu nombre 
// otra con tu platillo favorito
// otra varible indicando si es o no es tu platillo favorito
// vas a imprimirlo en console(usando console.log(AQUI VA LO QUE QUIERES IMPRIMIR))


//(opcional) -> vas a cambiar de color al fondo del elemento que se llama  ---->.   seccion-carga

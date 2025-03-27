const perfumes = [
    { nombre: "Very Good Girl", marca: "Carolina Herrera", tipo: "Mujer", precio: 75.99 },
    { nombre: "Miss Dior", marca: "Dior", tipo: "Mujer", precio: 89.99 },
    { nombre: "Cher 18 Glitter", marca: "CHER BEAUTY", tipo: "Mujer", precio: 65.99 },
    { nombre: "Scandal", marca: "Jean Paul Gaultier", tipo: "Mujer", precio: 79.99},
    { nombre: "One Million", marca: "Paco Rabanne", tipo: "Hombre", precio: 99.99 },
    { nombre: "212", marca: "Carolina Herrera", tipo: "Hombre", precio: 89.99 },
    { nombre: "Chester Ice", marca: "Chester", tipo: "Hombre", precio: 59.99 },
    { nombre: "Invictus", marca: "Paco Rabanne", tipo: "Hombre", precio: 109.99 },
    { nombre: "Paco", marca: "Paco Rabanne", tipo: "Niño", precio: 29.99 },
    { nombre: "Pibe's", marca: "Caro Cuore", tipo: "Niño", precio: 19.99 },
    { nombre: "Mujercitas Funny", marca: "Colbert", tipo: "Niño", precio: 24.99 },
    { nombre: "Mujercitas Sunny", marca: "Colbert", tipo: "Niño", precio: 24.99 },
    { nombre: "Calvin Klein One", marca: "Calvin klein", tipo: "Unisex", precio: 79.99 },
    { nombre: "Transforma", marca: "Natura", tipo: "Unisex", precio: 69.99 },
    { nombre: "Libertad", marca: "Natura", tipo: "Unisex", precio: 59.99 },
    { nombre: "Barakkat", marca: "arakkat", tipo: "Unisex", precio: 49.99 }
];

function mostrarMenu() {
    return prompt("Seleccione una opción:\n1. Comprar\n2. Salir");
}

function filtrarPerfume(tipo, marca, nombre) {
    return perfumes.find(perfume => perfume.tipo.toLowerCase() === tipo.toLowerCase() && 
                                  perfume.marca.toLowerCase() === marca.toLowerCase() && 
                                  perfume.nombre.toLowerCase() === nombre.toLowerCase());
}

function calcularTotal(perfume, cantidad) {
    return perfume.precio * cantidad;
}

function comprarPerfume() {
    let total = 0;
    let seguirComprando;

    do {
        let tipo = prompt("Ingrese el tipo de perfume (Hombre, Mujer, Niño, Unisex):");
        let marca = prompt("Ingrese la marca del perfume:");
        let nombre = prompt("Ingrese el nombre del perfume:");
        
        let perfumeSeleccionado = filtrarPerfume(tipo, marca, nombre);
        
        if (!perfumeSeleccionado) {
            alert("Perfume no encontrado. Intente nuevamente.");
            continue;
        }
        
        let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
        
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Cantidad inválida.");
            continue;
        }
        
        let subtotal = calcularTotal(perfumeSeleccionado, cantidad);
        total += subtotal;
        alert(`Has comprado ${cantidad} unidades de ${perfumeSeleccionado.nombre} (${perfumeSeleccionado.marca}) por un total de $${subtotal.toFixed(2)}`);
        
        seguirComprando = prompt("¿Desea seguir comprando? (Sí/No)").toLowerCase();
    } while (seguirComprando === "si");
    
    alert(`El total de su compra es: $${total.toFixed(2)}`);
}

function iniciar() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch (opcion) {
            case "1":
                comprarPerfume();
                break;
            case "2":
                alert("Gracias por visitar nuestra tienda.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== "2");
}

iniciar();

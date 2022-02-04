// Simulador de n productos
let subTotal = 0;
let precioTotal = 0;

let carritoProductos = [];

const cart = []

const carritoCompras = []; 

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que va a llevar :"))
if (cantidadProductos>0) {

    for (let i = 1 ;i <=cantidadProductos;i++){
        subTotal   = solicitarProducto(i)
        precioTotal += subTotal;
    }
        
    alert("Su total por " + carritoProductos.length + " productos  es de " + precioTotal)
    alert("Está llevando los siguientes productos : ")
    for (i=0;i<carritoProductos.length;i++){
        console.log(carritoProductos[i])
    }
    alert("Gracias por su preferencia")
}
else {
    alert("Hasta otra oportunidad")
}



function solicitarProducto(i){
    
    let producto = prompt("Ingrese el producto " + i + " :")
    let cantidad = parseInt(prompt("Ingrese la cantidad de " + producto + " que va a llevar :"))
    let precio   = parseInt(prompt("Ingrese el precio unitario de "+ producto  + " :"))

    console.log("Ha añadido a su compra " + cantidad + " unidades del producto " + producto.toUpperCase() + " con precio unitario de " + precio + " con subtotal de " + cantidad*precio)
    
    carritoProductos.push(producto); //Arreglo con los productos

    return precio*cantidad;

    
}
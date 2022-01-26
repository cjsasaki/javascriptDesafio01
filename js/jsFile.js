    // Simulador de n productos
let subTotal = 0;
let precioTotal = 0;

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que va a llevar :"))
if (cantidadProductos>0) {

    for (let i = 1 ;i <=cantidadProductos;i++){
        subTotal   = solicitarProducto(i)
        precioTotal += subTotal;
    }
        
    alert("Su total es de " + precioTotal)
    alert("Gracias por su preferencia")
}
else {
    alert("Hasta otra oportunidad")
}



function solicitarProducto(i){
    
    let producto = prompt("Ingrese el producto " + i + " :")
    let cantidad = prompt("Ingrese la cantidad del producto " + i + " :")
    let precio   = prompt("Ingrese el precio del producto " + i + " :")

    console.log("Ha añadido a su compra " + cantidad + " unidades del producto " + producto.toUpperCase() + " con precio unitario de " + precio + " con subtotal de " + cantidad*precio)
    return precio*cantidad;
}
console.log(products)
const cart =  []

class ProductCart {
    constructor (obj,qty){
        //this.id = obj.id
        this.name  = obj.name
        this.price = obj.price
        this.quantity = qty
    }
}
//Funcion para agregar al carrito
const addProductsToCart = (name,quantity=1)=>{
    const product = products.find(p=>p.name == name)
   
    if(!product) return "Producto no existe"

    const productCart = cart.find(p=>p.name == name)

    if(productCart) productCart.quantity+=quantity
    else  cart.push(new ProductCart(product,quantity))

    return cart

}

const precioTotal = () =>{
    const suma = cart.reduce((suma,p) => suma + (p.price*p.quantity),0)
    console.log("El total de su compra es : " , suma)
    return suma;
}

//***** */
let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que va a llevar :"))

if (cantidadProductos>0) {
    for (let i = 1 ;i <=cantidadProductos;i++){
        solicitarProducto(i)
        //precioTotal += subTotal;
        precioTotal();     
    }
    let html= "<table><tr>";

    html += "<th>Producto</th><th>Cantidad</th><th>Precio</th><th>Sub-Total</th></tr><tr>"
    

    //Impresión de Tabla con los productos:
    for (let i =0 ;i <cantidadProductos;i++){
        console.log(cart[i].name);

        html+= "<td>" + cart[i].name + "</td>"
        html+= "<td>" + cart[i].quantity + "</td>"
        html+= "<td>" + cart[i].price + "</td>"
        html+= "<td>" + cart[i].quantity*cart[i].price + "</td>"
        
        html+="</tr><tr>" // Salto de Fila
        
    }
    html+="<td colspan=2></td><td>Total</td><td>" + precioTotal() +"</td></tr><tr>"
    html +="</tr></table>"
    document.getElementById("productosAgregados").innerHTML = html;
    console.log(html)

}
else {
    document.getElementById("productosAgregados").innerHTML = "Hasta otra oportunidad";
    alert("Hasta otra oportunidad")
}

//----------------------------

//Funcion para solicitar un producto
function solicitarProducto(i){
    
    let producto = prompt("Ingrese el producto " + i + " :")
    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto " + producto + " que va a llevar : "))
    addProductsToCart(producto.toUpperCase(),cantidad)
    
}
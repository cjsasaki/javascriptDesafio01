console.log(products)
const cart =  []

class ProductCart {
    constructor (obj,qty){
        this.id = obj.id
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
}
else {
    alert("Hasta otra oportunidad")
}

//----------------------------

//Funcion para solicitar un producto
function solicitarProducto(i){
    
    let producto = prompt("Ingrese el producto " + i + " :")
    let cantidad = parseInt(prompt("Ingrese la cantidad de unidades del producto " + producto + " que va a llevar : "))
    addProductsToCart(producto.toUpperCase(),cantidad)
    
}


//Productos
const productos = [
    // Snacks
    {
        id: "dorito-01",
        titulo: "Doritos",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre: "Snacks",
            id: "snacks"
        },
        precio: 0.50
    },
    {
        id: "pa-fritas-01",
        titulo: "Pa' fritas",
        imagen: "./IMG/LOGO.jpg",
        categoria: {
            nombre: "Snacks",
            id: "snacks"
        },
        precio: 0.50
    },
    {
        id: "coca-cola-01",
        titulo: "Coca Cola",
        imagen: "IMG/LOGO.jpg",
        categoria : {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 0.50
    },
    {
        id: "ruffles-01",
        titulo: "Ruffles",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre: "Snacks",
            id: "snacks"
        },
        precio: 0.50
    },
    {
        id: "aceite-01",
        titulo: "Aceite",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.50
    },
    {
        id: "azucar-01",
        titulo: "Azucar",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.50
    },
    {
        id: "deja-01",
        titulo: "Deja",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.50
    },
    {
        id: "chocolate-jet-01",
        titulo: "Chocolate Jet",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre:"Dulces",
            id:"dulces"
        },
        precio: 0.50
    },
    {
        id: "tatos-01",
        titulo: "Tatos",
        imagen: "IMG/LOGO.jpg",
        categoria: {
            nombre: "Snacks",
            id: "snacks"
        },
        precio: 0.50
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML= "";
    
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id= "${producto.id}" >Agregar Carrito</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    console.log(botonesAgregar);
}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener('click', (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            console.log(productoCategoria);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e){
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }    
    actualizarNumerito();
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}



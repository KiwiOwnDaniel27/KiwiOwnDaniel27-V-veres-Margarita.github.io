//Productos
const productos = [
    // Snacks
    {
        id: "dorito-01",
        titulo: "Doritos",
        imagen: "IMG/Doritos.jpg",
        categoria: {
            nombre: "Snacks Dulces",
            id: "snacks-dulces"
        },
        precio: 0.50
    },
    {
        id: "K-chitos-01",
        titulo: "K-chitos",
        imagen: "IMG/K-chitos.jpg",
        categoria: {
            nombre: "Snacks Dulces",
            id: "snacks-dulces"
        },
        precio: 0.50
    },
    {
        id: "Tatos-02",
        titulo: "Tatos Queso",
        imagen: "IMG/tatos-queso.jpg",
        categoria: {
            nombre: "Snacks Dulces",
            id: "snacks-dulces"
        },
        precio: 0.50
    },
    {
        id: "frutaris-01",
        titulo: "Frutaris",
        imagen: "IMG/frutaris.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 0.30
    },
    {
        id: "Squiz-01",
        titulo: "Squiz",
        imagen: "IMG/Squiz.webp",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 0.30
    },
    {
        id: "Gaseosas-01",
        titulo: "Gaseosas",
        imagen: "IMG/Gaseosa.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 0.30
    },
    {
        id: "jugos-ya-01",
        titulo: "Jugos Ya",
        imagen: "IMG/JUGOYA.jpg",
        categoria: {
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 0.30
    },
    {
        id: "aceite-01",
        titulo: "Aceite",
        imagen: "IMG/Aceite.png",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 2.70
    },
    {
        id: "atun-01",
        titulo: "Atun",
        imagen: "IMG/Atun.webp",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 2.50
    },
    {
        id: "sardina-01",
        titulo: "Sardina",
        imagen: "IMG/Sardina.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 2.50
    },
    {
        id: "papel-higienico-01",
        titulo: "Papel higiénico",
        imagen: "IMG/Papel higienico.avif",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 1
    },
    {
        id: "Deja-01",
        titulo: "Deja",
        imagen: "IMG/Deja.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 1
    },
    {
        id: "sal-01",
        titulo: "Sal",
        imagen: "IMG/Sal.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.85
    },
    {
        id: "azucar-01",
        titulo: "Azúcar",
        imagen: "IMG/Azucar.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.85
    },
    {
        id: "aromatel-01",
        titulo: "Aromatel",
        imagen: "IMG/Aromatel.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 1
    },
    {
        id: "jabon-01",
        titulo: "Jabón",
        imagen: "IMG/Jabon.webp",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 1
    },
    {
        id: "Shampoo-01",
        titulo: "Shampoo",
        imagen: "IMG/Shampoo.webp",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 1
    },
    {
        id: "bicarbonato-01",
        titulo: "Bicarbonato",
        imagen: "IMG/bicarbonatosodio.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 1
    },
    {
        id: "anis-01",
        titulo: "Anis",
        imagen: "IMG/Anis.webp",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.1
    },
    {
        id: "oregano-01",
        titulo: "Oregano",
        imagen: "IMG/Oregano.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.1
    },
    {
        id: "achiote-01",
        titulo: "Achiote",
        imagen: "IMG/Achiote.jpeg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.1
    },
    {
        id: "canela-01",
        titulo: "Canela",
        imagen: "IMG/Canela.jpg",
        categoria: {
            nombre:"Cocina & Hogar",
            id:"cocina-hogar"
        },
        precio: 0.1
    },
    {
        id: "caramelos-01",
        titulo: "Caramelos",
        imagen: "IMG/Caramelos.jpg",
        categoria: {
            nombre:"Snacks Dulces",
            id:"snacks-dulces"
        },
        precio: 0.05
    },
    {
        id: "bon-bon-01",
        titulo: "Bon bon",
        imagen: "IMG/Bon bon.webp",
        categoria: {
            nombre:"Snacks Dulces",
            id:"snacks-dulces"
        },
        precio: 0.10
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

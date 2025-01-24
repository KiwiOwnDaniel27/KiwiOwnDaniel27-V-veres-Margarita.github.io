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

function cargarProductos() {
    
    productos.forEach(producto => {

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
}

cargarProductos();

botonesCategorias.forEach(boton =>{
    boton.addEventListener('click', (e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");
    })
})

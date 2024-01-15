/*me traigo el div shopcontent del html */
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

/*array con productos*/

const productos = [
  {
    id: 1,
    nombre: "anteojos",
    precio: 10000,
    img: "./img/accessory-3002608__340.jpg",
  },

  {
    id: 2,
    nombre: "conjunto ",
    precio: 2500,
    img: "./img/beauty-7403551__340.jpg",
  },

  {
    id: 3,
    nombre: "tiara y aros ",
    precio: 18000,
    img: "./img/bindi-2416060__340.jpg",
  },

  { id: 4, nombre: "aros ", precio: 20000, img: "./img/glass-665379__340.jpg" },
];
let carrito = [];

/*recorro el array */

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = ` 
    <img src =" ${product.img}">
    <h3> ${product.nombre}</h3>
    <p class="price"> ${product.precio}
    `;
  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "comprar";
  content.append(comprar);

  comprar.addEventListener("click", () => {
    carrito.push({
      id: product.id,
      img: product.img,
      nombre: product.nombre,
      precio: product.precio,
    });
    console.log(carrito);
  });
});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;

  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "x";
  modalButton.className = "modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src ="${product.img}">
        <h3> ${product.nombre}</h3>
        <p>${product.precio} $</p>
        `;
    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `
    total a pagar: ${total} $ `;
  modalContainer.append(totalBuying);
});

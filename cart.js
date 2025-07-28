 // Obtener referencias a los elementos HTML usando getElementById
 const countDisplay = document.getElementById('counter')
 const countDisplayModal = document.getElementById('counterModal')
 const modal=document.getElementById('modal')
 const subtractBtn = document.getElementById('substract')
 const addBtn = document.getElementById('add')
 const cantidadProductos=document.getElementById('cantidadProductos')
 const addToCart= document.getElementById('agregarCarrito')
 const priceUnitary=Number(document.getElementById('unitaryPrice').innerText)
 const closeBtn=document.getElementById('cerrar')

 let price = 59.95;

 let updateDisplay = () => countDisplay.textContent = price.toFixed(2)

 let add = () => {
     price+=priceUnitary;
     updateDisplay();
 }

 let subtract=()=> {
     if (price > priceUnitary*2) {
         price-=priceUnitary;
         updateDisplay();
     }
 }
 
 //Realizamos los eventos de escucha para botones
 subtractBtn.addEventListener('click', subtract);
 addBtn.addEventListener('click', add);

 addToCart.addEventListener('click',obtenerCantidad=()=>{
    cantidadProductos.innerText=Math.floor(price/priceUnitary);
     countDisplayModal.textContent=price.toFixed(2)
     modal.classList.replace('modal','modalOn')
     });

closeBtn.addEventListener('click', cerarModal=()=>modal.classList.replace
('modalOn','modal'))



 updateDisplay();
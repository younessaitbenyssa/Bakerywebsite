document.addEventListener('DOMContentLoaded', function(){
    let previewContainers = document.querySelectorAll('.products-preview');
  
    previewContainers.forEach(preveiwContainer => {
      let previewBox = preveiwContainer.querySelectorAll('.preview');
  
      preveiwContainer.previousElementSibling.querySelectorAll('.products').forEach(product =>{
        product.onclick = (event) =>{
          if(!event.target.classList.contains('b1')) {
            preveiwContainer.style.display = 'grid';
            let name = product.getAttribute('data-name');
            previewBox.forEach(preview =>{
              let target = preview.getAttribute('data-target');
              if(name == target){
                preview.classList.add('active');
              }
            });
          }
        };
      });
  
      previewBox.forEach(close =>{
        close.querySelector('.bx-x').onclick = () =>{
          close.classList.remove('active');
          preveiwContainer.style.display = 'none';
        };
      });
    });
  });
  
  const products = 
  [
    {
        id:1,
        name: "Babka",
        price: 2.00,
        image: "images/cr1.png",
    },
    {
        id:2,
        name:"Brioché au chocolat",
        price:4.00,
        image: "images/cr2.png",
    },
    {
        id:3,
        name:"Cinnamon",
        price:1.00,
        image: "images/cr3.png",
    },
    {
        id:4,
        name:"Chocolat",
        price:3.00,
        image: "images/cr4.png",
    },
    {
        id:5,
        name:"Escargo",
        price:5.00,
        image: "images/cr5.png",
    },
    {
        id:6,
        name:"Lafayette",
        price:10.00,
        image: "images/cr6.png",

    },
    {
        id:7,
        name:"pain de suisse",
        price:7.00,
        image: "images/cr7.png",

    },
    {
        id:8,
        name:"Strawberry",
        price:13.00,
        image: "images/cr8.png",
    },
    {
      id:9,
      name: "Crimy cake",
      price:9.00,
      image: "images/c1.png",
  },
  {
      id:10,
      name:"Coconut",
      price:7.00,
      image: "images/c2.png",
  },
  {
      id:11,
      name:"Banana Cake",
      price:13.00,
      image: "images/c3.png",
      
  },
  {
      id:12,
      name:"Chocolat Cake",
      price:10.00,
      image: "images/c4.png",
      
  },
  {
      id:13,
      name:"Strawberry cake",
      price:17.00,
      image: "images/c5.png",
      
  },
  {
      id:14,
      name:"Caramel cake",
      price:14.00,
      image: "images/c6.png",
      
  },
  {
      id:15,
      name:"Birthday cake",
      price:20.00,
      image: "images/c7.png",
      
  },
  {
      id:16,
      name:"flower Cake",
      price:12.00,
      image: "images/c8.png",
    
  },
  {
    id:17,
    name:"Baguette",
    price:0.5,
    image: "images/br1.png",
   
},
  {
    id:18,
    name: "whole grain",
    price: 4.75,
    image: "images/br2.png",
   
},
{
    id:19,
    name:"challah",
    price:6.00,
    image: "images/br3.png",
},
{
    id:20,
    name:"Ciabata",
    price:5.00,
    image: "images/br4.png",
   
},
{
    id:21,
    name:"Flat",
    price:1.00,
    image: "images/br5.png",
},
{
    id:22,
    name:"Sprouted grain",
    price:4.45,
    image: "images/br6.png",
},
{
    id:23,
    name:"Rye",
    price:3.65,
    image: "images/br7.png",
},
{
    id:24,
    name:"White",
    price:2.00,
    image: "images/br8.png",
}
  ]
  document.addEventListener('DOMContentLoaded', function() {
    var cartCount = cart.length;
    document.getElementById("nbrt").innerHTML = cartCount;
    displaycart(); 
  }); 
  document.addEventListener('click', function() {
    var cartCount = cart.length;
    document.getElementById("nbrt").innerHTML = cartCount; 
  });
  var cart = []; 
  function displaycart() {
    let total = 0;
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let j = 0;
    if (cart.length == 0) {
      let x = document.getElementById("cartItem")
      document.getElementById("totale").innerHTML = "$ "+0+".00"
      x.innerHTML = "Your cart is empty";
      x.style.fontSize = "30px"
      x.style.textAlign = "center"
    } else {
      document.getElementById("cartItem").innerHTML = cart.map((item) => {
        total = total + item.price;
        return`
          <div class='cart-item'>
            <div class='row-img'>
              <img class='rowing' src=${item.image}>
            </div>
            <p style='font-size:25px;  font-family: "Dancing Script", cursive; color : rgb(234, 166, 100); position : absolute ; left:30%'>${item.name}</p>
            <h2 style='font-size:20px;position : absolute;left : 75%'>$${item.price.toFixed(2)}</h2>` +
          "<i class='bx bx-trash' onclick='deleteElement(" + (j++) + ")'></i></div>"
      }).join('');
      document.getElementById("totale").innerHTML = "$ " + total.toFixed(2); 
    }
  }
  function addtocart(index) {
        var messageDiv = document.getElementById("ntf");
        messageDiv.classList.add("ntfcl");
        setTimeout(function() {
        messageDiv.classList.remove("ntfcl");
        }, 2000);
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        displaycart();
  }
  function deleteElement(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displaycart();
  }
  displaycart();
function hidebar(){
    let x = document.getElementById("blc");
    x.classList.toggle("cls");
}
  
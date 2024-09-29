 // open $ close Cart
var cart = document.querySelector('.cart');
function open_cart(){
    cart.classList.add("active");
}
function close_cart(){
    cart.classList.remove("active");
}

// add items in cart 

var all_products_json;

let items_in_cart  = document.querySelector('.items_in_cart');
let product_cart = [];

function addToCart(id,btn){
    product_cart.push(all_products_json[id]);
    btn.classList.add("active");
    getCartItems();
}

function getCartItems(){
    let items = "";
    for(let i = 0 ; i<product_cart.length ; i++){
        items += `
          <div onclick="open_cart()" class="item_cart">
                <img src="${product_cart[i].img}" alt="Product 1">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">${product_cart[i].price}$</p>
                </div>
                <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
    }
    items_in_cart.innerHTML = items;
}

function remove_from_cart(index){
    product_cart.splice(index,1);
    getCartItems();

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus")
    for (let i = 0; i < addToCartButtons.length; i++) {
        product_cart.forEach(product =>{
            if(product.id == i){
                addToCartButtons[i].classList.add("active");
            }else{
                addToCartButtons[i].classList.remove("active");

            }
        })
    }
}
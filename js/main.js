 // open & close Cart
var cart = document.querySelector('.cart');
function open_cart(){
    cart.classList.add("active");
}
function close_cart(){
    cart.classList.remove("active");
}

// open menu 
let menu = document.querySelector('#menu');
function open_menu(){
    menu.classList.add("active");
}
function close_menu(){
    menu.classList.remove("active");
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




let count_items = document.querySelector('.count_items');
let price_cart = document.querySelector('.price_cart');
let count_cart_items = document.querySelector('.count_items_cart');
let price_cart_total = document.querySelector('.price_cart_total');



function getCartItems(){
    let items = "";
    let total_price = 0;
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
        total_price += product_cart[i].price;
    }
    items_in_cart.innerHTML = items;
    price_cart.innerHTML =  total_price + "$" ;
    count_items.innerHTML = product_cart.length;
    price_cart_total.innerHTML =  total_price + "$" ;
    if (product_cart.length === 1){
        count_cart_items.innerHTML = `(${product_cart.length} Item in Cart)`
    }else{
        count_cart_items.innerHTML = `(${product_cart.length} Items in Cart)`

    }

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



// Back to top function

let back_to_top = document.querySelector('.back_to_top');
back_to_top.addEventListener("click" , function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})



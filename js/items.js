fetch('js/items.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const swiperItemsSale = document.getElementById('swiper_items_sale');
        let htmlContent = '';
        all_products_json = data ;
        data.forEach(product => {
            if (product.old_price) {
                const percentDiscount = Math.floor(((product.old_price - product.price) / product.old_price) * 100);
                htmlContent += `
                    <div class="product swiper-slide">
                        <!-- Always Visible Discount Percentage -->
                        <span class="sale_persent">${percentDiscount}%</span>

                        <!-- Sliding Icons -->
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id} ,this);" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>

                        <!-- Product Images -->
                        <div class="img_product">
                            <img src="${product.img}" alt="${product.name}">
                            <img src="${product.img_hover}" class="img_hover" alt="${product.name} Hover">
                        </div>

                        <!-- Product Name -->
                        <h3 class="name_product"><a href="#">${product.name}</a></h3>

                        <!-- Product Stars -->
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <!-- Product Price -->
                        <div class="price">
                            <p><span>${product.price}$</span></p>
                            <p class="old_price">${product.old_price}$</p>
                        </div>
                    </div>
                `;
            }
        });

        swiperItemsSale.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

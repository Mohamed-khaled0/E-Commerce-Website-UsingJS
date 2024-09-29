fetch('js/items.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let swiperItemsSale = document.getElementById('swiper_items_sale');
        let other_product_swiper = document.getElementById('other_product_swiper');
        let other_product_swiper2 = document.getElementById('other_product_swiper2');

        let saleHtmlContent = ''; // For items on sale
        let allProductsHtmlContent = ''; // For all products

        // Store the JSON data for later use
        all_products_json = data;

        // Generate the HTML content
        data.forEach(product => {
            // Generate content for products on sale (with old_price)
            if (product.old_price) {
                const percentDiscount = Math.floor(((product.old_price - product.price) / product.old_price) * 100);
                saleHtmlContent += `
                    <div class="product swiper-slide">
                        <!-- Always Visible Discount Percentage -->
                        <span class="sale_persent">${percentDiscount}%</span>

                        <!-- Sliding Icons -->
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id}, this);" class="fa-solid fa-cart-plus"></i></span>
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

            // All Products Content
            allProductsHtmlContent += `
                <div class="product swiper-slide">
                    <!-- Sliding Icons -->
                    <div class="icons">
                        <span><i onclick="addToCart(${product.id}, this);" class="fa-solid fa-cart-plus"></i></span>
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
                    </div>
                </div>
            `;
        });

        // Add the generated content to the respective swiper containers
        swiperItemsSale.innerHTML = saleHtmlContent;  // Products with old_price
        other_product_swiper.innerHTML = allProductsHtmlContent;  // All products for the first swiper
        other_product_swiper2.innerHTML = allProductsHtmlContent; // All products for the second swiper
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

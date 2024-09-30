fetch('js/items.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        let products_div = document.getElementById('products_div');

        let saleHtmlContent = ''; // For items on sale
        let allProductsHtmlContent = ''; // For all products

        // Store the JSON data for later use
        all_products_json = data;

        // Generate the HTML content 
        data.forEach(product => {
            let old_price_pargraph = product.old_price ? `<p class="old_price">${product.old_price}$</p>` : " ";
            // Generate content for products on sale (with old_price)
            if (product.price) {
                let percentDiscount =  product.old_price 
                ? `<span class="sale_persent">${ Math.floor(((product.old_price - product.price) / product.old_price) * 100)}%</span>`
                : " ";
                saleHtmlContent += `
                    <div class="product swiper-slide">
                        <!-- Always Visible Discount Percentage -->

                        <!-- Sliding Icons -->
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id}, this);" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        ${percentDiscount}
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
                            ${old_price_pargraph}
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
        products_div.innerHTML = saleHtmlContent;  // Products with old_price
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

(async function () {
    const shirts = document.querySelector('#shirts');
    const shoes = document.querySelector('#shoes');
    const wristwatch = document.querySelector('#wristwatch');
    const productrow = document.querySelector('#product-row');
    const allproduct = document.querySelector('#all-product');
    const producttitle = document.querySelector('#product-title');

    let products;

    const response = await fetch('https://mysterious-caverns-39239.herokuapp.com')
    const data = await response.json();
    products = data;

    allproduct.addEventListener('click', () => {

    });

    products.forEach(product => {
        let div = document.createElement('div');
        div.className = 'col-sm-4';

        let htmlProduct = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src=${product.imgUrl} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" id="product-title">${product.category}</h5>
                    <p class="card-text">
                     Price : ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    `;
        div.innerHTML = htmlProduct;
        productrow.append(div);
    });

    allproduct.addEventListener('click', (e) => {
        e.preventDefault();
        productrow.innerHTML = '';
        producttitle.textContent = 'All Products';
        products.forEach(product => {
            let div = document.createElement('div');
            div.className = 'col-sm-4';
            let htmlProduct = `
                <div class="card mb-3" style="max-width: 540px;">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img src=${product.imgUrl} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title" id="product-title">${product.category}</h5>
                        <p class="card-text">
                         Price : ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
        `;
            div.innerHTML = htmlProduct;
            productrow.append(div);
        });
    });

    shirts.addEventListener('click', () => {
        productrow.innerHTML = '';
        producttitle.textContent = 'Shirts';
        products.forEach(product => {
            if (product.category === 'Shirt') {
                let div = document.createElement('div');
                div.className = 'col-sm-4';

                let htmlProduct = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src=${product.imgUrl} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" id="product-title">${product.category}</h5>
                    <p class="card-text">
                     Price : ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    `;
                div.innerHTML = htmlProduct;
                productrow.append(div);
            }
        });
    })

    shoes.addEventListener('click', () => {
        productrow.innerHTML = '';
        producttitle.textContent = 'Shoes';
        products.forEach(product => {
            if (product.category === 'Shoes') {
                let div = document.createElement('div');
                div.className = 'col-sm-4';

                let htmlProduct = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src=${product.imgUrl} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" id="product-title">${product.category}</h5>
                    <p class="card-text">
                     Price : ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    `;
                div.innerHTML = htmlProduct;
                productrow.append(div);
            }
        });
    })

    wristwatch.addEventListener('click', () => {
        productrow.innerHTML = '';
        producttitle.textContent = 'Wrist Watch';
        products.forEach(product => {
            if (product.category === 'Wrist watch') {
                let div = document.createElement('div');
                div.className = 'col-sm-4';

                let htmlProduct = `
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src=${product.imgUrl} class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title" id="product-title">${product.category}</h5>
                    <p class="card-text">
                     Price : ${product.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    `;
                div.innerHTML = htmlProduct;
                productrow.append(div);
            }
        });
    })
})();

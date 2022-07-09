onload();

function onload(){
    fetch("http://localhost:8080/products/unique")
        .then(res => res.json().then(
            products=>{
                console.log(products);
                if(products.length > 0){
                    const html = products.map(product =>
                        `<div class="product-grid">
                        <div class="product-img">
                            <a href="#" class="img">
                            <img class="img" src="${product.image}" onclick="window.location='ProductPage.html';sessionStorage.setItem('pID',${product.id})">
                            </a>
                            <a class="view-product" id ="view-product" onclick="window.location='ProductPage.html';sessionStorage.setItem('pID',${product.id})"></i>View Product</a>
                        </div>
                        
                        <div class="product-information">
                            <h1 class="product-name">${product.name}</h1>
                            <h2 class="product-name">${product.model}</h2>
                            <h3 class="product-name">${product.brand}</h3>
                            <div class="product-price">$${product.price}</div>
                        </div>
                        </div>`).join('')
                    document.querySelector("#searchGrid").innerHTML += html
                }
            }
        ));
}
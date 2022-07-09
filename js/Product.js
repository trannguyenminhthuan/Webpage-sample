$(function () {
    let idProduct = sessionStorage.getItem('pID');
    console.log("pID=" + sessionStorage.getItem('pID'))
    let url = "http://localhost:8080/product/" + idProduct;
    fetch(url)
        .then(res => res.json()) //error catch when converting to json here
        .then(json => {
            var imgURL = json.image;
            var model = json.model;
            var brand = json.brand;
            var name = json.name;
            var price = json.price;
            var size = json.size;
            var condition = json.condition;
            var description = json.description;

            document.querySelector("#product-container").innerHTML = ` 
         <div class ="product-container left-column">
                 <img src="${imgURL}" alt="">
            </div>
        
            <div class ="product-container right-column">
                <div class= "product-container product-description">
                    <span>${brand}  ${model}</span>
                    <h1>${name}</h1>
                    <p>${description} </p>
                </div>
        
                <div class="product-container product-price">
                    <span>${price}$</span>
                    <a href="#" class="cart-btn" id="cartBtn" onclick="addToCart()">Add to cart</a>
                </div>
          </div>
          ` + document.querySelector("#product-container").innerHTML;
            let ListProductURL = "http://localhost:8080/products/model/" + model;
            fetch(ListProductURL)
                .then(res => res.json()) //error catch when converting to json here
                .then(json => {
                    console.log(json);
                    for (var i = 0; i < json.length; i++) {
                        var sessionName= 'sName'+(i+1);
                        var id = json[i].id;
                        var imgURL = json[i].image;
                        var price = json[i].price;
                        var size = json[i].size;
                        var condition = json[i].condition;
                         var sellerName =json[i].seller.name;

                        document.querySelector("#lineOfProduct").innerHTML += `
            <tr>
                    <td><img style="width: 200px" src="${imgURL}"></td>
                    <td>${sellerName}</td>
                    <td>${size}</td>
                    <td>${condition}</td>
                    <td>${price} $</td>
                    <td>
                        <button class="view-button" onclick="viewProduct(${id})">View</button>
                    </td>
                </tr>
          `;
                    }
                })
                .catch(() => {
                    console.log("Error")
                });

        })
        .catch(() => {
            console.log("Error")
        });
});

function viewProduct(id) {
    sessionStorage.setItem('pID', id);
    window.location = 'ProductPage.html'
}


function addToCart() {


}
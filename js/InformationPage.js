// Popup function
function popupDelete() {
    document.location = "#popup1";
}
function popupUpdate(){
    document.location="#popup0";
}
$(function () {
    let idUser = sessionStorage.getItem('userID');
    let url = "http://localhost:8080/customer/" + idUser;
    fetch(url)
        .then(res => res.json()) //error catch when converting to json here
        .then(json => {

            document.querySelector('#informationDiv').innerHTML =`
                <h1 id="customerName">${json.customerName}</h1>
                <span id="registrationDate">Join Date: ${json.registrationDate}</span>
                <h2 id="email">${json.email}</h2>
                <h3 id="address">Address: ${json.address}</h3>
                <h3 id="visaID">Visa ID: ${json.visaID}</h3>
                <p id="productBought">Number of bought products: ${json.productBought}</p>
                <button class="updButton" onclick="popupUpdate()">Change Information</button>
                <button class="delButton" onclick="popupDelete()">Delete Account</button>
            `
            document.querySelector("#updID").value = json.id;
            document.querySelector("#updName").value =json.customerName;
            document.querySelector("#updPass").value = json.password;
            document.querySelector("#updEmail").value = json.email;
            document.querySelector("#updAdress").value = json.address;
            document.querySelector("#visaUpd").value = json.visaID;
            document.querySelector("#registrationDateUpd").value = json.registrationDate;
            document.querySelector("#noProductUpd").value = json.productBought;


        })
});

function updAPI() {
    let url = "http://localhost:8080/customer";
    let user = {
        id:document.querySelector("#updID").value,
        email: document.querySelector("#updEmail").value,
        password: document.querySelector("#updPass").value,
        customerName: document.querySelector("#updName").value,
        visaID: document.querySelector("#visaUpd").value,
        address: document.querySelector("#updAdress").value,
        registrationDate: document.querySelector("#registrationDateUpd").value,
        productBought: document.querySelector("#noProductUpd").value
    };
    fetch(url, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        },
        body: JSON.stringify(user)
    })
        .then(res=>res.json())
        .then(json=>{
            alert("Updated");
            location.href="#close";

        })
}
function delAPI() {
    let idUser = sessionStorage.getItem('userID');
    window.location='Homepage.html';
    sessionStorage.removeItem('accType');
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('username');
    let url = "http://localhost:8080/customer/" + idUser;
    fetch(url, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'

        }
    }).then(r =>{

    })

}
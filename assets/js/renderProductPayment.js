const tablePayment = document.querySelector(".table_payment");
let productsFilter = [];
let idProduct = [...new Set(JSON.parse(localStorage.getItem("cartIdList")))];
const car = {};
JSON.parse(localStorage.getItem("cartIdList")).forEach((item) => {
    if (car[item] === undefined) car[item] = 0;
    car[item]++;
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

let sumPrice = 0;

readTextFile("../assets/data/data.json", function(text) {
    products = JSON.parse(text);
    productsFilter = products.filter((product) => {
        return idProduct.includes(product.id.toString());
    });

    productsFilter.forEach((product) => {
        let price = parseInt(product.productPriceCurrent.replace("$", ""));
        let pricePay = car[product.id] * price;
        sumPrice += pricePay;
        tablePayment.innerHTML += `
    <div
    class="d-flex justify-content-center align-items-center w-75 border-bottom p-3"
  >
    <div><img src="${product.productImage1}" width="100" /></div>
    <div class="ms-5 fs-5" style="width:250px">
      <div class=" fs-5">${product.productName}</div>
      <div class="d-inline-block fw-bold">${product.productPriceCurrent}</div>
    </div>
    <div class="fs-5 mx-auto text-center" style="width:150px">${car[product.id]}</div>
    
    <div class=" fs-5 fw-bold text-center text-danger" style="width:150px">${pricePay}$</div>
    </div>

    `;
    });

    document.querySelector(".sum_price").innerHTML = `Tổng:  ${sumPrice}$`;
});

document.querySelector(".del").addEventListener("click", (e) => {
    localStorage.setItem("cartIdList", []);
    location.reload();
});
const keyWordSearch = sessionStorage.getItem("searchValue");
const minMaxArr = sessionStorage.getItem("rangePrice")
  ? JSON.parse(sessionStorage.getItem("rangePrice"))
  : null;
const product = document.querySelector(".product");

console.log(minMaxArr);

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

readTextFile("../assets/data/data.json", function (text) {
  let products = JSON.parse(text);
  let productsFilter = null;

  if (minMaxArr) {
    productsFilter = products.filter((item) => {
      return (
        parseInt(item.productPriceCurrent) >= parseInt(minMaxArr[0]) &&
        parseInt(item.productPriceCurrent) <= parseInt(minMaxArr[1])
      );
    });
  }

  products = minMaxArr ? productsFilter : products;
  let n = 0;
  products.forEach((productItem) => {
    if (
      productItem.productName
        .toLowerCase()
        .includes(keyWordSearch.toLowerCase())
    ) {
      n++;
      product.innerHTML += `
      <div class="container">
      <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
              <div class="product-item">
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-6">
                              <div class="product-item-image-wrapper">
                                  <a 
                                      href="./product_details.html"
                                      style="display: block; height: 100%"
                                      onclick="setProduct(${productItem.id})">
                                      <img class="product-item-image" src=${productItem.productImage1} alt="">
                                  </a>
                              </div>
                          </div>
                          <div class="col-6">
                              <h3 class="product-item-name" style="color: rgba(127,19,43,1);"><b>${productItem.productName}</b></h3>
                              <h4 class="product-item-author">${productItem.productAuthor1}</h4>
                              <h4 class="product-item-author">${productItem.productAuthor2}</h4>
                              <div class="price">
                                  <span class="product-item-price-current">${productItem.productPriceCurrent}</span>
                              </div>
                              <div class="add mt-auto mb-3"  onclick="addCartIdList(${productItem.id})"}>
                                  <button style="background-color: #f45b03;">Add</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-2"></div>
      </div>
  </div>
    `;
    }
  });
  if (n == 0) {
    product.innerHTML = `<div class="mt-5 fw-bold fs-4">Không có sản phẩm nào</div>`;
  }
});

function setProduct(productId) {
  sessionStorage.setItem("productId", `[${productId}]`);
}

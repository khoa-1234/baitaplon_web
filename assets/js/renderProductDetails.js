const id = JSON.parse(sessionStorage.getItem("productId"))[0];

const productDetails = document.querySelector(".product_details");

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

readTextFile("../assets/data/data.json", function(text) {
    const products = JSON.parse(text);
    product = products.find((product) => {
        return product.id === id;
    });
    console.log(product);
    productDetails.innerHTML += ` 
        
            <div class="image_details col d-flex justify-content-center p-4 align-items-center">

                <div class="container121">
                    <div class="mySlides" style="display: block;">
                        <div class="numbertext">1 / 6</div>
                        <img class="imgdt" src="${product.productImage1}" style="width:900%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">2 / 6</div>
                        <img class="imgdt" src="${product.productImage2}" style="width:900%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">3 / 6</div>
                        <img class="imgdt" src="${product.productImage3}" style="width:900%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">4 / 6</div>
                        <img class="imgdt" src="${product.productImage4}" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">5 / 6</div>
                        <img class="imgdt" src="${product.productImage5}" style="width:100%">
                    </div>

                    <div class="mySlides">
                        <div class="numbertext">6 / 6</div>
                        <img class="imgdt" src="${product.productImage6}" style="width:100%">
                    </div>

                    <a class="prev" onclick="plusSlides(-1)">❮</a>
                    <a class="next" onclick="plusSlides(1)">❯</a>

                    <div class="caption-container">
                        <p id="caption"></p>
                    </div>

                    <div class="row">
                        <div class="column">
                            <img class="demo cursor imgdt active" src="${product.productImage1}" style="width:100%" onclick="currentSlide(1)" alt="">
                        </div>
                        <div class="column">
                            <img class="demo cursor imgdt" src="${product.productImage2}" style="width:100%" onclick="currentSlide(2)" alt="">
                        </div>

                        <div class="column">
                            <img class="demo cursor imgdt" src="${product.productImage3}" style="width:100%" onclick="currentSlide(3)" alt="">
                        </div>
                        <div class="column">
                            <img class="demo cursor imgdt" src="${product.productImage4}" style="width:100%" onclick="currentSlide(4)" alt="">
                        </div>
                        <div class="column">
                            <img class="demo cursor imgdt" src="${product.productImage5}" style="width:100%" onclick="currentSlide(5)" alt="">
                        </div>
                        <div class="column">
                            <img class="demo cursor imgdt" src="${product.productImage6}" style="width:100%" onclick="currentSlide(6)" alt="">
                        </div>
                    </div>
                </div>
            </div>
        
      <div class="main_detail col mb-auto">
        <h2 class="title fw-bolder fs-1 text-uppercase">${product.productName}</h2>
        <label class="author fw-light text-uppercase">${product.productAuthor1}</label><br><br>
        <label class="author fw-light text-uppercase">${product.productAuthor2}</label>
        <div class="w-50 my-3">
          <span class="text-primary fw-bold fs-2">${product.productPriceCurrent}</span>
        </div>
        <div class="description">
          <div class="fw-bold my-2 ">Giới  thiệu</div>
          ${product.description}
        </div>
        <div class="add" onclick="addCartIdList(${product.id})" }>
          <button class="w-75" style="background-color: #f45b03;">
            <i class="bi bi-cart me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    `;
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
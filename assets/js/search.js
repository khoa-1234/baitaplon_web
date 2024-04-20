const btnSearch = document.querySelector(".search_icons");
const search_input = document.getElementById("search_input");

btnSearch.addEventListener("click", () => {
    if (search_input.value != "") {
        sessionStorage.setItem("searchValue", search_input.value);
        window.location.href = './search_product.html'
    }
});

search_input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sessionStorage.setItem("searchValue", search_input.value);
        window.location.href = './search_product.html'
    }
});
// name price and fit description of the product
var productName = document.getElementsByClassName("js-product-detail__product-name f2")[0].innerText;
var productPrice = document.getElementsByClassName("price-default")[0].innerText;
var productSummary = document.getElementsByClassName("js-product-accordion__content")[0].textContent;

try {
    var productFit = document.getElementsByClassName("fit")[0].innerHTML;
}
catch (err) {
    var productFit = "There is no fit description provided";
}


// debugging
// console.log(productName)
// console.log(productPrice)
// console.log(productSummary);
// console.log(productFit);


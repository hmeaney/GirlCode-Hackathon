// name price and fit description of the product
var productName = "This product is called " + document.getElementsByClassName("js-product-detail__product-name f2")[0].innerText;
var productPrice = "This product costs " + document.getElementsByClassName("price-default")[0].innerText;
var productSummary = "Some features of the product are " + document.getElementsByClassName("js-product-accordion__content")[0].textContent;

try {
    var productFit = "The product fit is " + document.getElementsByClassName("fit")[0].innerHTML;
}
catch (err) {
    var productFit = "There is no fit description provided";
}


// debugging
// console.log(productName)
// console.log(productPrice)
// console.log(productSummary);
// console.log(productFit);


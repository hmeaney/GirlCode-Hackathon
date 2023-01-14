'use strict';
window.speechSynthesis.speak(
    new SpeechSynthesisUtterance("content page loaded")
 );
 
 function getFullName(){
    window.speechSynthesis.speak(
		new SpeechSynthesisUtterance("content page loaded")
	 );
    
    var productName = document.getElementsByClassName("js-product-detail__product-name f2")[0].innerText;

    if(document.getElementsByClassName("price-default")[0] != null){
        var productPrice = document.getElementsByClassName("price-default")[0].innerText;

    }
    console.log(productName)
    console.log(productPrice)
    return productName;
}

export default {getFullName};



// function createProduct() {
//     // var name = document.getElementsByClassName("js-product-detail__product-name f2")[0].innerText;
//     // var productPrice = document.getElementsByClassName("price-default")[0].innerText;
//     // var color = "blue";

//     // var descr = name + " costs " + productPrice + " with colour " + color;
//     // document.body.innerHTML = "<h1>The product is:  " + descr + "</h1>"
//     // document.getElementByID('product-descr').innerHTML = "test";
//     // console.log("done product descr");

//     if(document.getElementsByClassName("s-product-detail__product-name f2")[0] != null){
//         var productName = document.getElementsByClassName("js-product-detail__product-name f2")[0].innerText;
//     }
    
//     if(document.getElementsByClassName("price-default")[0] != null){
//         var productPrice = document.getElementsByClassName("price-default")[0].innerText;

//     }

//     window.speechSynthesis.speak(
// 		new SpeechSynthesisUtterance("content page testing")
// 	 );
    
//     console.log(productName)
//     console.log(productPrice)
//     var descr = "product name is: " + productName;
//     document.getElementById("product-descr").innerHTML = descr;
// }

// chrome.runtime.sendMessage(greeting: "hello", function(response){
//     console.log(response.farewell);
// })
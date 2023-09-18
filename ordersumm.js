// select main app 
let cart;
let buy=document.querySelector("#btnBuy");
let tprice;
// order app 
let ctprice;



// JavaScript to navigate to payment.html
document.getElementById("continueToPayment").addEventListener("click", function() {
    window.location.href = "payment.html";
});
buy.onclick=(e)=>
{
    console.log("chala");
    cart=document.querySelector(".cartcntnt");
    tprice=document.querySelector(".total-price");
    ctprice=document.querySelector("#ctprice").innerText;
    console.log(ctprice);
};

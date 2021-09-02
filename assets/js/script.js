
//extra product add dollar calculate
function extraProduct(dollar,fieldName){
    //select update field
    const extraProductField = document.getElementById(fieldName);
    //insert new dollar with innertext
    extraProductField.innerText = dollar;

    const totalPriceValue = totalPrice();

    //tatal price feild updated
    document.getElementById('total-price').innerText = totalPriceValue;
    //final total price feild updated
    document.getElementById('final-total-price').innerText = totalPriceValue;

}

//convert string to float
function strToFloat(fieldName){
    const fieldValue = document.getElementById(fieldName).innerText;
    const extraPrice = parseFloat(fieldValue);
    return extraPrice;
}

//total price calculate
function totalPrice(){
    //best price value
    const bestPrice = strToFloat('best-price');
    
    //extra memory price value
    const extraMemoryCost = strToFloat('extra-memory-cost');
    
    //extra storage price value
    const extraStorageCost = strToFloat('extra-storage-cost');
    
    //extra delivery price value
    const extraDeliveryCost = strToFloat('extra-delivery-charge');
    
    //total price calculate
    const totalPriceValue = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    
    return totalPriceValue;    

}


//16 gb memory click handalar
document.getElementById('16gb-memory').addEventListener('click',function(){
    extraProduct(180,'extra-memory-cost');
});
// 8 gb memory click handlar
document.getElementById('8gb-memory').addEventListener('click',function(){
    extraProduct(0,'extra-memory-cost');
})
//256 gb extra storage click handlar
document.getElementById('256gb-storage').addEventListener('click',function(){
    extraProduct(0,'extra-storage-cost');
})
//512 gb extra storage click handlar
document.getElementById('512gb-storage').addEventListener('click',function(){
    extraProduct(100,'extra-storage-cost');
})
//1tb extra storage click handlar
document.getElementById('1tb-storage').addEventListener('click',function(){
    extraProduct(180,'extra-storage-cost');
})
//no extra delivery charge with primary days
document.getElementById('delivery-charge-0').addEventListener('click',function(){
    extraProduct(0,'extra-delivery-charge');
})
//extra delivery charge with earlier days
document.getElementById('delivery-charge-20').addEventListener('click',function(){
    extraProduct(20,'extra-delivery-charge');
})

//use promo code
document.getElementById('apply-promo').addEventListener('click',function(){

    //user promo code
    const userPromo = document.getElementById('user-promo');
    let userPromoCode = userPromo.value;
    //our discount promo code
    const promoCode = 'stevekaku';

    if(userPromoCode == promoCode){
        //current total
        const totalPricefield = document.getElementById('total-price');
        const totalPrice = totalPricefield.innerText;
        //calculate discount price
        let discount20 = (totalPrice / 100) * 20;
        let discountPrice = totalPrice - discount20;
        //discount total set
        const finalTotalfield = document.getElementById('final-total-price');
        finalTotalfield.innerText = discountPrice;

        //vanish input user promo code
        document.getElementById('user-promo').value = ' ';
    }
})
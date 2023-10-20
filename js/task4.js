function getShippingCost(country){
    let price;
    let message;
    switch (country){
       case country = "Australia":
        price = 170;
        break; 

        case country = "China":
        price = 100;
        break; 

        case country = "Chile":
        price = 250;
        break; 

        case country = "Jamaica":
        price = 120;
        break; 

        default:
            message = "Sorry, there is no delivery to your country";
            return message;
    }
    return `Shipping to ${country} will cost ${price} credits `
    

}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
function checkForSpam(message){
    const blackListedWord1 = "sale";
    const blackListedWord2 = "spam";
    return (message.toLowerCase().includes(blackListedWord1) || message.toLowerCase().includes(blackListedWord2));
    }


// function checkForSpam(message){
//     const blackLictedWord1 = "sale";
//     const blackListedWord2 = "spam";
//     const lowercaseInput = message.toLowerCase();

//     return(lowercaseInput.includes(blackLictedWord1) || lowercaseInput.includes(blackListedWord2));
// }


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
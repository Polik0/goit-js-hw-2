const checkForSpam = function (message) {
  let lowerStr = message.toLowerCase();
  if (lowerStr.includes("spam") || lowerStr.includes("sale")) {
    return true;
  } else {
    return false;
  }
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

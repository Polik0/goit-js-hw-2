let input;
const numbers = [];
let total = 0;

for (
  let input = prompt("Введіть число");
  input !== null;
  input = prompt("Введіть число")
) {
  if (isNaN(input)) {
    alert("Не число, спробуйте ще раз");
    continue;
  }

  numbers.push(Number(input));
}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log("Загальна сума чисел дорівнює " + total);

const calculateEngravingPrice = function (message, pricePerWord) {
  let countGaps = 0;
  let target = " ";
  let pos = -1;
  while ((pos = message.indexOf(target, pos + 1)) != -1) {
    countGaps += 1;
  }
  return pricePerWord * (countGaps + 1);
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

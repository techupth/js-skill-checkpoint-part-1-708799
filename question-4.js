// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
// Loop
let lowestQuantity = inventory[0];
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].quantity < lowestQuantity.quantity) {
    lowestQuantity = inventory[i];
  }
}

// Use Built in
// let lowestQuantity = inventory.reduce((accumulator, currentValue) =>
//   currentValue.quantity < accumulator.quantity ? currentValue : accumulator
// );

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${lowestQuantity.name} ซึ่งมี ${lowestQuantity.quantity}`
);

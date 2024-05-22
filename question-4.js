// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
const checkLowestQuantity = [];
for (let i = 0; i < inventory.length; i++) {
  let highestQuantity = inventory[0].quantity;
  if (inventory[i].quantity < highestQuantity) {
    checkLowestQuantity.push(
      `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory[i].name} ซึ่งมี ${inventory[i].quantity}`
    );
    break; // ผิดแน่ๆ
  }
}
console.log(checkLowestQuantity);

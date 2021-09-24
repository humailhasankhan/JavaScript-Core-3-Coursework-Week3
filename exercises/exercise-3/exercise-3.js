let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(arr) {
  let total = 0;
  console.log(`QTY\tITEM\t\tTOTAL`);
  arr.forEach((element) => {
    ({ itemName, quantity, unitPrice } = element);
    let totalUnitPrice = unitPrice * quantity;
    console.log(`${quantity}\t${itemName}\t${totalUnitPrice.toFixed(2)}`);
    total += totalUnitPrice;
  });
  console.log(`TOTAL: ${total}`);
}

printReceipt(order);

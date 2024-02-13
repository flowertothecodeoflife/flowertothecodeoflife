import products from './products'
const ProductName = products[4].name;
let shepping:number=0;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shipingAddress: string;
const filteredResults = products.filter((product)=>{
 if(ProductName == product.name){
    return true;
  }

});
if(filteredResults){
console.log(ProductName);  
}
let num = 0;
if(products[num].preOrder){
  console.log(`${products[num].name} we will send a message when It's on the way`);
}
if(new Number(products[num].price) >= 25 ){
shepping= 0;
console.log(`${products[num].name} we provide free shipping for this product! `);
}
if(new Number(products[num].price) < 25 ){
shepping= 5;
console.log(`${products[num].name} the price for shipping for this product is ${shepping}`);
}
console.log(shepping);
shipingAddress = 'my adress is';
const regExp= /New\sYork/g;
if(shipingAddress.match(regExp)){
  taxPercent=10;
}
else{
  taxPercent=5;
}

console.log(`${products[num].name} your tax  percent is ${taxPercent}`);
taxTotal= Number(products[num].price)*taxPercent;
total= taxTotal+ Number(products[num].price)+ shepping;
console.log(`${products[num].name} you have to pay ${total}$`);
console.log(products[num].name);
console.log(shipingAddress.match(regExp));
console.log(products[num].price);
console.log(taxTotal);
console.log(shepping);
console.log(total);



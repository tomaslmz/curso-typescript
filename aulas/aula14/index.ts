//Type Assertions
//Jeito um
const productName : any = "Boné";
let productId = productName as string;


//Jeito dois
const productName2 : any = "Boné";
let productId2 = <string>productName2;

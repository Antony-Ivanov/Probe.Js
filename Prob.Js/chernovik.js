// let qwe = ["one", "two", "three", "four", "five"];
// console.log(qwe[0]);

// function getExtremeElements(array) {
//   // Change code below this line
//   array = [0, array.langth -1];
// return

// Change code above this line
// }
// getExtremeElements(["apple", "peach", "pear", "banana"])

// function getExtremeElements(planets) {
//   const deletedPlanets = planets.splice(1, planets.length - 2);
//   console.log("deletedPlanets", deletedPlanets);
//   console.log("planets", planets);
// }
// getExtremeElements([
//   'Earth',
//   'Mars',
//   'Venus',
//   'Jupiter',
//   'Uranus',
//   'Saturn',
//   'Neptun',
//   'Tartar',
// ]);

// function splitMessage(message, delimeter) {
//   let words;
//   // delimetr = [" "];
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
//   // console.log(words);
//   // console.log(message);


// }
// splitMessage("Mango hurries to the train", " ")

// function findLongestWord(string) {
//   let qwe = string.split(" ");
//   let longest = " ";
//   for (let i = 0; i < qwe.length; i++) {
//     if (qwe[i].length > longest.length) {
//       longest = qwe[i];
//     }
//     return longest;
//   }
//   console.log(longest); 
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i++){
//     numbers.push(i);
//   }
//   // console.log("num", numbers);
//   // Change code above this line
//   console.log('222', numbers);
//   return numbers.push[i];

// }
// createArrayOfNumbers(29, 34)


////////////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//    // Change code below this line
// let bigValue = [];
// for (let i = 0; i <numbers.length; i += 1){
//   if(numbers[i] > value){
//   //  bigValue.push(i);
//    bigValue.push(numbers[i]);
//   }
//   }
//   console.log(bigValue);
//   return bigValue;

//   // Change code above this line // 
// }

// filterArray([1, 2, 3, 4, 5], 4);

/////////////////////////////////////////////////////////
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];

//   // let arr1 = 0;
//   // let arr2 = 0;

//   // for (let arr1 of array1){
//   //   if(array1.includes(array2[arr2]) && arr1 === arr2){

//   //     newArray.push(arr1);
//   //   }

//   // }
//   // for (let arr2 of array2){
//   //   if(array2.includes(array1[arr1]) && arr2 === arr1){
//   //     newArray.push(arr2);
//   //   }
//   // }

//   for (let element of array1) {
// if (array2.includes(element)) {
// newArray.push(element)
// }
// }
//         console.log('newArray', newArray);


//   return newArray;

//  // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4])
//////////////////////////////////////////////////////////////////////////
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i of order) {
//     total += i;
//   }

//   // Change code above this line
//   console.log('total', total);
//   return total;
// }
// calculateTotalPrice([412, 371, 94, 63, 176])


// function arraySum(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++){ sum += array[i]; }
//   console.log(sum);
// } arraySum(arr)
/////////////////////////////////////////////////////////////////////////////////////////////////
// function includes(array, value) {
//   // Change code below this line

//   for (let i of array) {
//     if (array[i] === value) {
//       console.log('true', true);
//       return true;
//     }
//     else {
//       console.log('false', false);
//       return false;
//     }
//   }
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3);
////////////////////////////////////////////////////////////////////////
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (let value of Object.values(salaries)) {
//     totalSalary  += salaries[value];
//   }
//   console.log(value);
//     return totalSalary;

// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
/////////
////////////////////////////////////18 - 3

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   let qwe = 0;
//   // Change code below this line
//   for (let product of products) {
//     if (product.name === productName) {
//       qwe = product.price;
//       return qwe;
//     }

//   }
//   return null;

// }

// //////////////////////////////////////////////////////////////////////////////
// let sum, billsPOJO;

// billsPOJO = YOURJSON.bills;

// sum = 0;

// for (let i = 0; billsPOJO.length; i++) {
//   sum += billsPOJO[i].pendingAmount;
// }


//   const array = [1, 5, 12, 3, 83, 5];
//     multiply(array);
//     function multiply(array) {
//         let product = 1;
//         `enter code here`for(i = 0; i < array.length; i++) {
//             product *= array[i];
//         }
//         console.log(product);
// }

//////////////////////////////////////


// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];


// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let qwe = 0;
// for (let product of products){
//   for (const key in product) {
//    if (product.name === productName) {
//      qwe = Object.values(product.price)*Object.values(product.quantity)
//    }
//   }
//  }


// console.log(qwe);
// return qwe;
//   // Пиши код выше этой строки
// }
//////////////////////////////////////////////////////////

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let total = 0;
//   for (const product of products){
//     for (const key in product){
//       if (product.name === productName)
//         total = product.price * product.quantity
//     }
//   }
//   console.log(total);
// return total;
//   // Пиши код выше этой строки
// }
// calculateTotalPrice("Radar");
///////////////////////////////////////////////////
             // odiginal
// Change code below this line
function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  console.log(total);
  return total;
  // Change code above this line
}


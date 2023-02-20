const max = Math.max(12,14,111,23)
// console.log(max);
const numbers = [12,14,155,123,555];
const number = Math.max(...numbers);
// console.log(...numbers);
const numbers2 = [...numbers];
numbers.push(33);
numbers2.push(444)
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [44,66, ...numbers,55,99];
console.log(numbers3);
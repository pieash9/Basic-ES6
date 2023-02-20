// arrow function multiply

const multiply = (n1, n2, n3) => n1 * n2 * n3;
// console.log(multiply(12,3,4));
// template string
const sentence = `
I am a web developer.
I love to code.
I love to eat biryani.
`;
// console.log(sentence);
// arrow function and take two parameters and take one as default value
const add = (n1, n2 = 55) => n1 + n2;
// console.log(add(45));

let newArray = [];
function evenNameFind(friends) {
  for (let friend of friends) {
    if (friend.length % 2 == 0) {
      newArray.push(friend, friend.length);
    }
    // console.log(friend.length);
  }
  return newArray;
}
const friends = ["ahad", "rased", "lisana", "sajala", "khan"];
// console.log(evenNameFind(friends));

// arrow function for esquire
let sum = 0;
const esquire = (array) => {
  for (let number of array) {
    const esquire = number ** 2;
    
    sum += esquire;
    // console.log(esquire,sum);
  }
  const average = sum / array.length;
  return average;
};
const array = [12, 13, 14, 15];
// console.log(esquire(array));



const findMaximum = (array1,array2)=> {
    const newArray = [...array1,...array2]
    const maxNumber = Math.max(...newArray)
    return maxNumber;
}
const array1 = [12,14,15,5]
const array2 = [1,2,3,4]
console.log(findMaximum(array1,array2))

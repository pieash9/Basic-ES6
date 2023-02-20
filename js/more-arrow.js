const add = (n1, n2) => n1 + n2;
const getFullName = (firstName, LastName) => firstName + " " + LastName;
const multi = (n1, n2) => n1 * n2;
// console.log(multi(7,8));
const addAll = (a, b, c, d, e) => a + b + c + d + e;
//no parameter arrow function
const GetPi = () => 3.1416;
// one parameter
const doubleIt = (n1) => n1 * 2;
// one parameter simple version
const fiveTimes = (n1) => n1 * 5;
//multi line arrow function
//if you want to return something use return
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSUm = y + z;
  const multyplyREsult = firstSum * secondSUm;
  const result = multyplyREsult / 2;
  return result;
};

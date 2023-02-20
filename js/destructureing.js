const fish ={
    name : 'King Hilsha',
    address : 'chandpur',
    color: 'silver',
    price : 4000,
    phone : '017000000000',
}
const phone1 = fish.phone;
const {phone} =fish;
// console.log(phone,phone1);

const {name ,age,profession} = {name : 'pieash',age :22,profession : "artist"};
console.log(name);
const {address} = fish;
console.log(address);


// array destructureing
const [frst,second] = [12,15,16,11,22];
console.log(frst,second);

const nyoks = ['sakib','bapparaj','raj'];
const [king,lost,notun] = nyoks
console.log(notun);

function getName (){
    return ['alim','halim']
}
const [baba,cacha] = getName();
console.log(cacha,baba);
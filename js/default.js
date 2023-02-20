function add(n1,n2){
    n2 = n2 ||0;
    return n1+n2;
}
// console.log(add(12));

function add(n1=0,n2=0){
    return n1+n2;
}
// console.log(add(10,3));

function fullName(Fname,lname = "Ahmed"){
    return Fname + " "+lname;
}
console.log(fullName('pieash'));
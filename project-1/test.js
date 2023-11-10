//Non-primities
//Array
let arr = [10, 20, 30];
let names = ["ravi", "mahesh", "manasa"];
let test = [10, "ravi", true];

console.log(typeof arr);
//access elements
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[10])
for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}

for (let x of arr) {
  console.log(x);
}

//Object
let student = {
  sno: 100, //property
  name: "Manoj",
  age: 21,
};

console.log(typeof student);

//access properties
console.log(student.sno);
console.log(student.name);
console.log(student.city);

//Iterate object(for-in)
for (let x in student) {
  console.log(student[x]);
}

//Complex array
let persons = [
  { pid: 100, name: "ravi", age: 21 },
  { pid: 100, name: "ravi", age: 21 },
  { pid: 100, name: "ravi", age: 21 },
]; //array of objects

for(let personObject of persons){
    for(let k in personObject){
        console.log(personObject[k])
    }
}


//Complex object
let emp={
    eno:100,
    name:"ravi",
    skills:['js','react','angular'],
    address:{
        city:'hyd',
        pincode:5656565,
        street:{
            streetName:'kphb',
            lane:10
        }
    }
}


console.log(emp.skills)
console.log(emp.address.city)
console.log(emp.address.street.lane)



//Create product object with keys pid,name,price,brand,reviews(array of objects(name of reviewer and desc))
// let car={

//     company: "BMW",
//     model: "Q3",
//     year: "2022",
//     type: "SUV", 
// };



// let keys=[]
// let values=[]
// for(let key in car){
//     keys.push(key)
//     // keys.push(car[key])
// }



// for(let key in car){
//     console.log(key,car[key]);
// }
// let carKeys=Object.keys(car)
// console.log(carKeys);

// let carValues=Object.values(car)
// console.log(carValues);

// let carProperties=Object.entries(car)
// console.log(carProperties);
// console.log(car['company']);




// let nums=[1,2,3]
// for(let key in nums){
//     console.log(nums,nums[key]);
// }





// let nums=[1,2,3];

// console.log(Object.keys(nums));
// console.log(Object.values(nums));
// console.log(Object.entries(nums));



// let nums=[
//     [1,2],
//     [3,4],
//     [5,6]
// ]

// console.log(nums.flat());


// let nums=[
//     [1,2],
//     [3,4],
//     [5,6]
//     [[[9,10],'vasant'],11]
// ]

// console.log(nums.flat(3));





// sort by keys

let obj={
    name: "mumin",
    age: 22,
    country: "india"
}
let sortedKeys=Object.keys(obj).sort();
let sortedObj={};
for(let key of sortedKeys){
    sortedObj[key]=obj[key]
}

console.log(sortedObj)
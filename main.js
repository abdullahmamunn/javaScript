console.log("hello world!");
var arra = [
    'mamun',
    'tutul',
    'shahrrukh',
    'shuvo',
    'manik'
]
/*
for(ar of arra){
    console.log(ar);
}
*/

// const ar = arra.map( newAr=> {
//    return newAr
// });
// console.log(ar)


/*
arra.forEach(function(element) {
    console.log(element);
});
*/
/*
let i = 0;
while(i<arra.length){
    console.log(arra[i]);
    i++;
}
*/
/*
for(let i = 0; i<arra.length; i++)
{
    console.log(arra[i]);
}
*/
// array of object
const ob = [
      {
        name: "mamun",
        city: "dhaka",
        dis: "Kishoreganj",
        op: "bajitpur",
        vil: "Dhurighatatia"
      },
      {
        name: "tutul",
        city: "jessore",
        dis: "moniranpur",
        op: "mitrpur",
        vil: "Dhurighdgfatatia"
      },
      {
        name: "shahrukh",
        city: "rangpur",
        dis: "rangpur",
        op: "vatigahr",
        vil: "shitaka"
      },
  
]

// console.log(ob[3]);
/*
for(item of ob){
    console.log(item.vil);
}
*/
ob.forEach(function(info, i, myInfo) {
    console.log(`${i}:${info.name}`);
    console.log(myInfo);
  });
const myName = 'abdullah'
console.log(myName.split(''))
console.log(myName.toUpperCase())
const string = 'mamun'
const age = 24.5
const isMarid = false
const notfaka = null
const kichonai = undefined

console.log(typeof(kichonai));

// let's start function

function displayName(age,name){
    console.log(`my name is ${name} and age is ${age}`)
}
displayName(12,'Hasan');
displayName(24,'Mamun');
displayName(25,'Khairul');
displayName(39,'Forhad');
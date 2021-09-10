console.log("hello world!");
var arra = [
    'mamun',
    'tutul',
    'shahrrukh',
    'shuvo',
    'manik'
]
// use for.. of loop
for(let ar of arra){
    console.log(ar);
}

// use map create a new array
const ar = arra.map( newAr=> {
   return newAr
});
 console.log(ar)



arra.forEach(function(element) {
    console.log(element);
});

let i = 0;
while(i<arra.length){
    console.log(arra[i]);
    i++;
}


for(let i = 0; i<arra.length; i++)
{
    console.log(arra[i]);
}

// array of object
const ob = [
      {
        name: "mamun",
        city: "dhaka",
        dis: "Kishoreganj",
        op: "bajitpur",
        vil: "Dhurighatatia",
        isHome: false,
      },
      {
        name: "tutul",
        city: "jessore",
        dis: "moniranpur",
        op: "mitrpur",
        vil: "Dhurbaal",
        isHome: true,
      },
      {
        name: "shahrukh",
        city: "rangpur",
        dis: "rangpur",
        op: "vatigahr",
        vil: "shitaka",
        isHome: false
      },
      {
        name: "manik",
        city: "rangpur",
        dis: "gibanda",
        op: "cagolbanda",
        vil: "goat",
        isHome: false
      },
      {
        name: "shuvo",
        city: "sylhet",
        dis: "habiganj",
        op: "vatigaga",
        vil: "dolapur",
        isHome: false
      },
  
]

for(info of ob){
  if(!info.isHome){
    console.log(`current memebers are: ${info.name}`);
  }
  
}

// Higher order array methods forEach, map, filter
ob.forEach(function(data){
  console.log(`name: ${data.name} => city: ${data.city} => dis: ${data.dis}`);
})
// for in loop
for (const key in ob) {
  if(ob.hasOwnProperty.call(ob,key)){
      console.log(ob[key]);
  }
}

const arr = ob.map(newAr =>{
  if(newAr.isHome == false){
   console.log(`${newAr.name} barite nai`);
  }  
  
})
console.log(arr);

ob.map(function(newData){
   if(newData.isHome){
     console.log(`${newData.name} barite`);
   }
})

const data = ob.filter(function(newFilter){
  return newFilter.isHome == true;
})
console.log(data);



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

// conditional statement
let x = 100
let y = 15
if(x>y){
  console.log(`x = ${x} is greater than y = ${y}`);
}else{
  console.log(`x = ${x} is not greater than y = ${y}`);

}

// ternary operator
const big = x == 100 ? 'big' : 'small'
console.log(big);

color = 'blue'
console.log(color === 'blue' ? 'Yes it is '+color : 'No! it is not '+color);
console.log(x>y ? 'Yes '+x+' is big' : 'No');

// switch case
switch(color){
  case 'red':
    console.log("yes it is red");
    break;
  case 'blue':
    console.log("Yes it is blue");
    break;
  default:
    console.log("None of this");
    break;
}

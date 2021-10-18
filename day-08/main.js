var cities = [
    {name: "Dhaka",established: 1920,area: 45000,density: 3000,temperature: 31},
    {name: "Rajsahi",established: 1905,area: 50000,density: 2000,temperature: 39},
    {name: "Barisal",established: 1935,area: 47000,density: 2500,temperature: 30},
    {name: "Comilla",established: 1900,area: 48000,density: 3200,temperature: 29},
    {name: "Sylhet",established: 1940,area: 65000,density: 1500,temperature: 37},
    {name: "Chittagong",established: 1911,area: 77000,density: 1000,temperature: 32},
    {name: "Khulna",established: 1950,area: 32000,density: 500,temperature: 39.9},
    {name: "Kishoreganj",established: 1955,area: 4500,density: 700,temperature: 36.5},
    {name: "Mymensingh",established: 1892,area: 51000,density: 1300,temperature: 37.5},
    {name: "Jessior",established: 1960,area: 6500,density: 350,temperature: 39.99}
]

//show the all information
// find the oldest city
// find the second oldest city
// find the newest city
// find the average temp
// find the hotest city
//


var companies = [
    {name: "company one", category: "tax", start: 1980, end: 2010},
    {name: "company toto", category: "finance", start: 1999, end: 2020},
    {name: "samsung", category: "software", start: 1990, end: 2015},
    {name: "walton", category: "tech", start: 1988, end: 2000},
    {name: "company tata", category: "tax", start: 1980, end: 2010},
    {name: "company bye bye", category: "tax", start: 1980, end: 2010},
    {name: "company food", category: "food", start: 1980, end: 2010},
    {name: "company consulation", category: "management", start: 1970, end: 2015},
    {name: "company pgu", category: "finance", start: 1992, end: 2021},
    {name: "company food panda", category: "food", start: 2016, end: 2021},
    {name: "company ben ten", category: "tech", start: 1980, end: 2010},
    {name: "company oneto nice", category: "tax", start: 1980, end: 2010},
    {name: "company one hatil", category: "tax", start: 1980, end: 2010},
]
var len = companies.length
companies.forEach((company,i)=>{
    console.log(i,company.name);
})


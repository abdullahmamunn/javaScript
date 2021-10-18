// function myDisplayer(data){
//     document.getElementById('data').innerHTML = data
//     console.log(data);
// }

// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
//   function myThird() {
//     myDisplayer("Welcome");
//   }
  
//   myFirst();
//   mySecond();
//   myThird();

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

// Do a calculation then display the result

var click = document.getElementById('click_btn')
click.addEventListener('click',countDown)
function countDown()
{
    document.getElementById('data').innerHTML = "Bangladesh Vs Oman";
}

var countDownDate = new Date("Oct 19, 2021 20:00:00").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
console.log(distance,days,hours,minutes,seconds);

//const date1 = new Date('December 17, 1995 03:24:00');
//Sun Dec 17 1995 03:24:00 GMT...

//const date2 = new Date('1995-12-17T03:24:00');
//Sun Dec 17 1995 03:24:00 GMT...

//console.log(date1,date2);


//Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  
if(days>0){
  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}
else if(hours>0){
  document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
}
else if(minutes>0){
  document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
}else{
  document.getElementById("demo").innerHTML = seconds + "s ";

}

 
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
});
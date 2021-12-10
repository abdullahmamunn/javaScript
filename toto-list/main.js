// single element
const title = document.getElementsByClassName('title')
const title = document.getElementById('heading')
const title = document.querySelector('#heading')
const title = document.querySelector('.title')
title.textContent = "My todo list";
console.log(title.textContent = "My todo list");

// multiple elements
const heading = document.getElementsByTagName('h1')
const heading = document.getElementsByClassName('title')
const heading = document.querySelectorAll('h1')
console.log(heading[0].textContent = "new todo");
console.log(heading[1].innerHTML = "new todo add");
console.log(heading); // output HTML colections
heading[0].style.color = 'red'
heading[0].style.background = '#CCC'
heading[0].style.textAlign = 'center'
heading[0].style.fontSize = '70px'

heading[1].style.fontStyle = 'italic'
heading[1].style.fontSize = '60px'

const input = document.querySelector('#myInput')
console.log(input.value = "I Love javaScript");
const btn = document.querySelector('input[type="submit"]')
btn.value = "SEND"
btn.style.background = "red"
btn.style.color = "#FFFFFF"
btn.style.padding = "0px 10px 0 10px"
console.log(btn);

const listItemsOdd = document.querySelectorAll('li:nth-child(odd)')
const listItemsEven = document.querySelectorAll('li:nth-child(even)')
console.log(listItemsOdd);

listItems[0].style.background = 'red'
listItems[1].style.background = 'green'
listItems[2].style.background = 'blue'
listItems[3].style.background = 'yellow'
listItems[4].style.background = 'coral'

listItemsOdd.forEach(items =>{
    console.log(items.style.background = 'coral');
})
listItemsEven.forEach(items =>{
    console.log(items.style.background = 'red');
})
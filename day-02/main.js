// with single element 
const form = document.getElementById('my-form')
form.style.background = 'red'
form.style.background = '#d22222'


const contain = document.querySelector('.btn')
contain.style.background = 'red'

// with multiple elememts
const ul = document.querySelectorAll('.item')
const ul = document.getElementsByClassName('item')
const ul = document.getElementsByTagName('li')
console.log(ul);
ul.forEach(item=>{
    console.log(item);
})

// Manipulating DOM
var ul = document.querySelector('.items')
ul.lastElementChild.remove()
ul.lastElementChild.innerHTML = "<h1>abdullah al mamun</h1>"
ul.lastElementChild.innerHTML = "abdullah al mamun"
ul.firstElementChild.innerHTML = "mamun"
ul.children[1].innerHTML = 184
ul.lastElementChild.innerHTML = "bubt"
ul.lastElementChild.style.background = 'green'

var textnode = document.createTextNode("item 4")
ul.appendChild(textnode)

ul.lastElementChild.remove()

const btn = document.querySelector('.btn')
btn.style.background = 'red'

// EVENTS
// click event, mouseover
btn.addEventListener('click',function(e){
    e.preventDefault()
    // console.log(e.target.value);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // document.querySelector('.my-form').style.background = '#555'
    const bg = document.querySelector('#my-form')
    bg.style.background = '#fffeee'
    // document.querySelector('body').style.background = 'red'
    document.querySelector('body').classList.add('bg-dark');




    setTimeout(function(){
        bg.style.background = ''
        document.querySelector('.bg-dark').removeAttribute('class')
    },3000)


})
const myForm = document.querySelector('#my-form')
const msg = document.querySelector('.msg')

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const userList = document.querySelector('#users')
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = "Please fill the form"
        msg.classList.add('error')
        setTimeout(function(){
            msg.remove()
        },2000)
    }
    else{
        const li = document.createElement('li') 
        li.appendChild(document.createTextNode(`name: ${nameInput.value} email: ${emailInput.value}`))
        userList.appendChild(li)
        nameInput.value = ''
        emailInput.value = ''
    }
})
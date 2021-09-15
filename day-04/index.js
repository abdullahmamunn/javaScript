var form = document.getElementById('addForm')
var listItem = document.getElementById('items')
var searchItem = document.querySelector('#filter')


//events
form.addEventListener('submit', addItems)
listItem.addEventListener('click', removeItem)
searchItem.addEventListener('keyup', searchItems)

// add items
function addItems(e){
    e.preventDefault();
    // get input
    var input = document.getElementById('item').value 
    
    // create element
    var newLi = document.createElement('li')
    var deleteBtn = document.createElement('button')
    

    // add class
    newLi.className = 'list-group-item'
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    
    //add text node with input value
    newLi.appendChild(document.createTextNode(input))
    deleteBtn.appendChild(document.createTextNode('X'))

    // new li is append to ul
    listItem.appendChild(newLi)

    // deleteBtn is append to li
    newLi.appendChild(deleteBtn)

    // sow in console
    console.log(newLi);
    console.log(deleteBtn);
    input = ''
}

//remove li items
function removeItem(e){
//   console.log(e.target.classList.contains('list-group-item')
//   console.log(e.target.classList.contains('delete'));
if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li = e.target.parentElement
        console.log(li);
        // listItem.removeChild(li)
        li.remove()
    }
}
else{
    console.log(0);
}

}

// searchItem
// function name and variable name same hoya jabe na
function searchItems(e){
    // console.log(e.target.value);
    var text = e.target.value.toLowerCase()
    var items = listItem.getElementsByTagName('li')
    console.log(items);
    Array.from(items).forEach(function(item){
        // console.log(item.firstChild.textContent);
        var itemName = item.firstChild.textContent
        // console.log(itemName.toLowerCase().indexOf(text) != -1);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none'
        }
    }) 
}
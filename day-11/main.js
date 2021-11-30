document.getElementById('getText').addEventListener('click',getText)
function getText(){

    fetch('sample.txt').then(response => response.text())
    .then(data => {
        // Do something with your data
        console.log(data);
    });
}

let nameInput = document.querySelector('#nameInput');
let passwordInput = document.querySelector('#passwordInput');
let dateInput = document.querySelector('#dateInput');


const getData = () =>{
    console.log(nameInput.value) ;
    console.log(passwordInput.value) ;
    console.log(dateInput.value) ;
    nameInput.value = "" ;
    passwordInput.value = "" ;
    dateInput.value = "" ;
}
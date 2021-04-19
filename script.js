//variables
const userInput = document.getElementById('userinput');
const btnEnter = document.getElementById('enter');

//functions
function userInputValue() {
  return userInput.value;    
}

function createListElement() {
    const li = document.createElement('li');
    const ul = document.querySelector('ul');

    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';    
}

function addEventAfterClick() {
    if (userInputValue() !== '' ) {
        createListElement();
    }  
}

function addEventAfterKeypress(event) {
    if ( userInputValue() !== '' &&  event.which ===13 ) {
        createListElement();
    }
}
btnEnter.addEventListener('click', addEventAfterClick)
userInput.addEventListener('keypress', addEventAfterKeypress)
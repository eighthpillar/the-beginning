let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hannibal.gif') {
        myImage.setAttribute('src','images/augh.gif');
    }
    else {
        myImage.setAttribute('src','images/hannibal.gif')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        myHeading.textContent = 'Perhaps you can help, friend.';
    }
    else {
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Perhaps you can help, ' + myName + '.';
    }
}

if(!localStorage.getItem('name')) {
    myHeading.textContent = 'Perhaps you can help, friend.';
}

else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Perhaps you can help, ' + storedName + '.';
}

myButton.onclick = function() {
    setUserName();
}
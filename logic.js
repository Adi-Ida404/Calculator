let b = document.getElementsByTagName('button');
let displayElement = document.getElementById('display');

for(let i = 0; i < b.length; i++){
    let text = b[i].innerText.trim();
    
    if (text === "BCKSPC") {
        b[i].addEventListener('click', function() {
            let currentDisplay = displayElement.innerText;
            if (currentDisplay.length > 1) {
                displayElement.innerText = currentDisplay.slice(0, -1);
            } else {
                displayElement.innerText = '0';
            }
        });
    } else if (text === "=") {
        b[i].addEventListener('click', function() {
            try {
                displayElement.innerText = eval(displayElement.innerText);
            } catch (e) {
                displayElement.innerText = "Error";
            }
        });
    }else if (text === "CLEAR ALL") {
        b[i].addEventListener('click', function() {
            displayElement.innerText = "";
        });

    }else if(text === "x"){
        b[i].addEventListener('click', function() {
            if (displayElement.innerText === '0') {
                displayElement.innerText = text;
            } else {
                displayElement.innerText += "*";
            }
        });
    }else {
        b[i].addEventListener('click', function() {
            if (displayElement.innerText === '0') {
                displayElement.innerText = text;
            } else {
                displayElement.innerText += text;
            }
        });
    }
}


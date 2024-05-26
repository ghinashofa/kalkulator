let isEqualPressed = false;

function addNumber(number) {
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value += number;
}

function clearNumber(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value = ""
}

function percent(){
    let display = document.getElementById("result").value;
    console.log (display);
    document.getElementById("result").value = ( display / 100);
}

function divide(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value += "/";
}

function multiplication(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value += "*";
}

function plusNumber(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value += "+";
}

function minNumber(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value += "-";
}

function delNumber(){
    let display = document.getElementById("result").value;
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value = display.slice(0,-1);
}

function getResult(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    isEqualPressed = true;
    let result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
}

function addComma(){
    if(isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").value =""
    }
    document.getElementById("result").value += ".";
    console.log (document.getElementById("result").value)
}


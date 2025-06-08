let x = 0
let y = 0
let operator
let i = 0
function add(x, y){
    return x + y
}
function subtract (x, y){
    return x - y
}
function multiply(x, y){
    return x * y
}
function divide (x, y){
    return x / y
}

function operate(x, operator, y){
    switch (operator){
        case '+': return add (x, y)
        case '-': return subtract(x, y)
        case '*': return multiply(x,y)
        case ':': return divide (x, y)
        default : return 'ERROR'
    }
}

const display = document.getElementById('display')
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        buttonText = button.innerText
        if(i === 0 && !isNaN(buttonText) && (operator === undefined || operator === null)){
            display.innerText = buttonText
            x = display.innerText
            ++i
        }
        else if(!isNaN(buttonText) && (operator === undefined || operator === null)){
            display.innerText += buttonText
            x = display.innerText 
            
        }
        else if(buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === ':'){
            operator = buttonText


        
        }
        else if (i !== 0 && !isNaN(buttonText) && (operator !== undefined || operator !== null)){
            display.innerText = buttonText
            y = display.innerText
            i = 0
        }
        else if(!isNaN(buttonText) && (operator !== undefined || operator !== null)){
            display.innerText += buttonText
            y = display.innerText
        }
        else if(buttonText === '.'){
            display.innerText += '.'
        }
        else if (buttonText === '='){

            display.innerText = operate(Number(x), operator, Number(y))
            i = 0
            operator = null
        }
        else if (buttonText === 'Clear'){
            i = 0
            x = 0
            y = 0
            operator = null
            display.innerText = 0

        }
    
    })
})





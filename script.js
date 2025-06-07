function operate(){
    
     return operation
}
const calculate = document.getElementById('calculate')
const result = document.getElementById('result')
calculate.addEventListener('click', () => {
    result.textContent = operate()
})
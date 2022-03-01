let display = document.querySelector("#display")
const calculator = document.querySelector('#calculator')
// const keys = calculator.querySelectorAll(".button")
// console.log("keys", keys)
const calculate = (n1, operator, n2) => {
    if(operator === "add"){
        return parseFloat(n1) + parseFloat(n2)
    }else if(operator === "subtract"){
        return parseFloat(n1) - parseFloat(n2)
    }else if(operator === "divide"){
        return parseFloat(n1)/parseFloat(n2)
    }else if(operator === "multiply"){
        return parseFloat(n1)*parseFloat(n2)
    }
}
const keys = calculator.querySelector('.calculator-keys')
console.log("keys", keys)
keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        console.log("key", key)
        const action = key.dataset.action
        console.log("action", action)
        const keyContent = key.textContent
        console.log("key content", keyContent)
        const displayNum = display.textContent
        console.log("displayNum", displayNum)
        let previousKeyType = calculator.dataset.previousKeyType
    
        if(!action){
        // console.log("number key")
        if(displayNum === "0" || previousKeyType ==="operator"){
            display.textContent = keyContent
        }
        else{
            display.textContent = displayNum + keyContent
        }
        previousKeyType = "number"
        }

        if(action ==="add" || action==="subtract" || action==="multiply" || action==="divide"){
        previousKeyType = "operator"
        calculator.dataset.firstValue = displayNum
        calculator.dataset.operator = action
        }
        
        // if(action === "decimal"){
        // let k = previousKeyType
        // console.log("k", k)
        // // console.log("decimal key")
        // if(!displayNum.includes('.')&&k!="operator"){
        //     display.textContent = displayNum + "."
        // }else if(k=="operator"){
        //     display.textContent = "0."
        // }
        // previousKeyType = "decimal"
        // }
        
        if(action === "calculate"){
        console.log("equal key")
        const firstValue = calculator.dataset.firstValue
        console.log("firstValue", firstValue)
        const operator = calculator.dataset.operator
        console.log("operator", operator)
        const secondValue = displayNum
        console.log("secondValue", secondValue)
        if(firstValue!==undefined && operator!==undefined){
            display.textContent = calculate(firstValue, operator, secondValue)
            previousKeyType = "calculate"
        }
        }
        
        if(action==="clear"){
        console.log("clear key")
        display.textContent = "0";
        previousKeyType ="clear"
        }
        
        if(action==="delete"){
        console.log("delete key")
        display.textContent = "0";
        previousKeyType ="delete"
        }
}})
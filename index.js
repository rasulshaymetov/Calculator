const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const division = document.getElementById('division')
const numbers = document.querySelectorAll('.numbers')
const result = document.getElementById('result')
const clear = document.getElementById('clear')
const operator = document.querySelectorAll('.operator')
const process = document.querySelector('.progress')
const equal = document.getElementById('equals')
const dot = document.getElementById('dot')
const percent = document.getElementById('percent')
const negative = document.getElementById('negative')
const grayBtn = document.   querySelectorAll('.gray-button')

let firstValue = null
let isFirstValue = true
let secondValue = 0
let isNull = true
let lastOperator = ''
let percentValue = 0


numbers.forEach(function(el){
    el.addEventListener('click', function(){
        clearAnimation()
        if(isFirstValue === true){
            if(isNull === true){
                result.innerHTML = el.innerHTML
                process.innerHTML = el.innerHTML
                firstValue = result.innerHTML
                isNull = false
            }
            else{
                result.innerHTML += el.innerHTML
                process.innerHTML += el.innerHTML
                firstValue = result.innerHTML
            }
        }
        else if(isFirstValue === false){
            if(isNull === true){
                result.innerHTML = el.innerHTML
                process.innerHTML += el.innerHTML
                secondValue = result.innerHTML
                isNull = false
            }
            else{
                result.innerHTML += el.innerHTML
                process.innerHTML += el.innerHTML
                secondValue = result.innerHTML
            }
        }
    })
})

operator.forEach(function(el){
    el.addEventListener('click',function(){        
        lastOperator = el.innerHTML
        if(isNull === false){
        if(isFirstValue === true){
            process.innerHTML += el.innerHTML
            console.log('1')
            isFirstValue = false
            secondValue = 0
            isNull = true
        }
        else{
            process.innerHTML = process.innerHTML
            console.log('2')
            process.innerHTML = eval(firstValue + lastOperator.replace(/X/gi, '*') + secondValue)
            result.innerHTML = process.innerHTML
            firstValue = process.innerHTML
            secondValue = 0
            // process.innerHTML = ''
            isFirstValue = false
            isNull = true
            
        }}
    })
})

document.getElementById('showInfo').onclick = function(){
    console.log(`
    Is First Value: ${isFirstValue}
    First Value: ${firstValue}
    Second Value: ${secondValue}
    Last Operation: ${lastOperator}
    IsNull: ${isNull}
    `)

}

clear.addEventListener('click',function(){
    isFirstValue = true
    isNull = true
    secondValue = 0
    firstValue = 0
    lastOperator = ''
    result.innerHTML = 0    
    process.innerHTML = 'Skytner™ Calc'
    clearAnimation()
    console.clear()
})

equal.addEventListener('click',function(){
    process.innerHTML = eval(firstValue + lastOperator.replace(/X/gi, '*') + secondValue)
    result.innerHTML = process.innerHTML
    firstValue = process.innerHTML
})

dot.addEventListener('click',function(){
    process.innerHTML += '.'
    result.innerHTML += '.'
})

percent.addEventListener('click',function(){
    if(isFirstValue === false && secondValue !== 0){
        percentValue = firstValue/100*secondValue
        process.innerHTML = eval(firstValue + lastOperator  + percentValue)
        result.innerHTML = process.innerHTML 
    }
})
negative.addEventListener('click',function(){
    result.innerHTML = -result.innerHTML
    if(isFirstValue === true){
        firstValue = -firstValue
     }
     else{
        secondValue = -secondValue
     }
     
})

//Animation

operator.forEach(function(el){
    el.addEventListener('click', function(){
        if(el.innerHTML == '+'){
            disablePlus()
    }
        if(el.innerHTML == '/'){
            disableDivision()
        }
        if(el.innerHTML == 'X'){
            disableMultiply()
        }
        if(el.innerHTML == '-'){
            disableMinus()
        }
    })
})

function disablePlus(){
    plus.classList.toggle('disabled')
    plus.disabled = true
    division.disabled = false
    multiply.disabled = false
    minus.disabled = false
    minus.classList.remove('disabled')
    multiply.classList.remove('disabled')
    division.classList.remove('disabled')
}
function disableDivision(){
    division.classList.toggle('disabled')
    plus.disabled = false
    division.disabled = true
    multiply.disabled = false
    minus.disabled = false
    plus.classList.remove('disabled')
    minus.classList.remove('disabled')
    multiply.classList.remove('disabled')
}
function disableMultiply(){
    multiply.classList.toggle('disabled')
    plus.disabled = false
    division.disabled = false
    multiply.disabled = true
    minus.disabled = false
    plus.classList.remove('disabled')
    minus.classList.remove('disabled')
    division.classList.remove('disabled')
}
function disableMinus(){
    minus.classList.toggle('disabled')
    plus.disabled = false
    division.disabled = false
    multiply.disabled = false
    minus.disabled = true
    plus.classList.remove('disabled')
    multiply.classList.remove('disabled')
    division.classList.remove('disabled')
}
function clearAnimation(){
    plus.classList.remove('disabled')
    multiply.classList.remove('disabled')
    division.classList.remove('disabled')
    minus.classList.remove('disabled')
    minus.disabled = false
    plus.disabled = false
    division.disabled = false
    multiply.disabled = false

}

numbers.forEach(function(el){
    el.addEventListener('click', function(){
    el.classList.add('animNum')
    setTimeout(function(){
        el.classList.remove('animNum')
    }, 50)
    })
})

equal.onclick = function(){
    equal.classList.add('animEqual')
    setTimeout(function(){
        equal.classList.remove('animEqual')
    }, 50)
}

grayBtn.forEach(function(el){
    el.addEventListener('click', function(){
        el.classList.add('animNum')
        setTimeout(function(){
            el.classList.remove('animNum')
        }, 50)
    })
})
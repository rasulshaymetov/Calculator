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
const grayBtn = document.querySelectorAll('.gray-button')

let isNull = true
let isFirstValue = true
let CurrentOperator = ''
let operators = []
let isOperator = false
let percentValue = 0
let lastOperator = ''
let lastValue = 0
let isDot = false
    
    numbers[9].disabled = true
    dot.disabled = true

    // result.innerHTML.style.color = 'red'
// console.log(result.innerHTML.length)

numbers.forEach(function(el){
    el.addEventListener('click', function(){
        clearAnimation()
        if(result.innerHTML.length >= 5){
            result.style.fontSize = '100px'
        }
        if(result.innerHTML.length >= 7){
            result.style.fontSize = '85px'
        }
        if(result.innerHTML.length >= 8){
            result.style.fontSize = '70px'            
        }
        if(result.innerHTML.length >= 9){
            el.disabled = true
        }
     

 
    
        if(isFirstValue === true){
            if(isNull === true){
                result.innerHTML = el.innerHTML
                isNull = false
                numbers[9].disabled = false
                dot.disabled = false
                process.innerHTML = el.innerHTML
                 
            }
            else{
                result.innerHTML += el.innerHTML
                process.innerHTML += el.innerHTML

            }
        }
        else{
            if(isNull === true){
                result.innerHTML = el.innerHTML 
                process.innerHTML += el.innerHTML
                isNull = false
                numbers[9].disabled = false
                dot.disabled = false
                CurrentOperator = ''
                operators = []
                isOperator = false


                
            }
            else{
                result.innerHTML += el.innerHTML
                process.innerHTML += el.innerHTML

            }
        }
      })})
    //   function a(){
  numbers.forEach(function(el){
    el.addEventListener('click', function(){
        if(isDot === true){
         dot.disabled = true
         console.log('sd')
        }
        else {
            dot.disabeld = false
        }
    })
  })

  dot.addEventListener('click', function(){
    isDot = true
  })

operator.forEach(function(el){
    el.addEventListener('click',function(){
        isOperator = true
        lastValue = result.innerHTML
        lastOperator = el.innerHTML
        if(isOperator === true && operators.length < 1){
            CurrentOperator = el.innerHTML
            process.innerHTML += CurrentOperator
            operators.push(CurrentOperator)
        }
    

      
   
       else if(isOperator === true && operators.length >= 1){
            process.innerHTML = process.innerHTML.replace(/.$/, el.innerHTML)
        }

        isFirstValue = false
        isNull = true
    })
})

document.getElementById('showInfo').addEventListener('click', function(){
    console.log(`
        IsNull: ${isNull}
        IsFirstValue: ${isFirstValue}
        CurrentOperator: ${CurrentOperator}
        Operators: ${operators}
        firstOperator: ${operators[0]}
        isOperator: ${isOperator}
        Oper. length: ${operators.length}
        Last Operator: ${lastOperator}
        Last Value: ${lastValue}
    `)
})

equal.addEventListener('click', function(){
    process.innerHTML = `${eval(process.innerHTML.replace(/X/gi, '*'))}`
})
clear.addEventListener('click',function(){
    isFirstValue = true
    isNull = true
    CurrentOperator = ''
    operators = []
    result.style.fontSize = '120px'
    numbers[9].disabled = true
    numbers.forEach(e => e.disabled = false)
    process.innerHTML = 'Clear'
    result.innerHTML = 0
    clearAnimation()
})




percent.addEventListener('click',function(){
    // if(isFirstValue === false && secondValue !== 0){
        // percentValue = result.innerHTML / 100
        percentValue = lastValue/100*result.innerHTML
        process.innerHTML = process.innerHTML.replace((lastOperator + result.innerHTML), (lastOperator + percentValue))
        result.innerHTML = percentValue
       

        // console.log(eval(result.innerHTML + lastOperator  + percentValue))
        console.log(percentValue)
        console.log(result.innerHTML)
        console.log(process.innerHTML)
        // result.innerHTML = process.innerHTML 
    // }
})



dot.addEventListener('click',function(){
    result.innerHTML += '.'
    process.innerHTML += '.'
})














//Disabling operator's buttons and animating 

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
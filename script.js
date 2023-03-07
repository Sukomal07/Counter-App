const decrementBtn = document.getElementById("decrement")
const incrementBtn = document.getElementById("increment")
const resetBtn = document.getElementById("reset")
const displayValue = document.getElementById("displayValue")

//for dcerement value
decrementBtn.addEventListener("click", ()=>{
    const value = Number(displayValue.innerText)
    if(value > 0){
        displayValue.innerText = value - 1;
    }else{
        alert("Negative value not allowed")
    }
})

//for increment value
incrementBtn.addEventListener("click", ()=>{
    const value = Number(displayValue.innerText)
    if(value <= 100){
        displayValue.innerText = value + 1;
    }else{
        alert("Number already 100")
    }
})

// for reset btn
resetBtn.addEventListener("click", ()=>{
    displayValue.innerText = 0
})
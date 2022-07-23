let convert = document.getElementById("btn")
let outputOne = document.getElementById("outputOne")
let outputTwo = document.getElementById("outputTwo")
let outputThree = document.getElementById("outputThree")




convert.addEventListener("click", function() {
    const inputEl = document.getElementById("input").value
    outputOne.innerHTML = `${inputEl} meters = ${inputEl  * 3.281} feet | ${inputEl} feet = ${(inputEl / 3.281).toFixed(3)} meters`
    outputTwo.innerHTML = `${inputEl} liters = ${inputEl  * 0.264} gallons | ${inputEl} gallons = ${(inputEl / 0.264).toFixed(3)} liters`
    outputThree.innerHTML = `${inputEl} kilos = ${(inputEl  * 2.204).toFixed(3)} pounds | ${inputEl} pounds = ${(inputEl / 2.204).toFixed(3)} kilos`
   


})
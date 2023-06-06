let meterToFeet
let literTogallon
let KiloToPound

let feetToMeter
let gallonToLiter
let poundToKilo

let inputEl = document.getElementById("number-el")

let meterAndFeetEl = document.getElementById("meterAndFeet-el")
let litersAndGallonsEl = document.getElementById("litersAndGallons-el")
let kiloAndPoundsEel = document.getElementById("kiloAndPounds-el")

function convert(){
    let baseValue = inputEl.value
    if (baseValue > 0){
        meterToFeet = (baseValue*3.281).toFixed(3)
        feetToMeter = (baseValue/3.281).toFixed(3)

        literTogallon = (baseValue*0.264).toFixed(3)
        gallonToLiter = (baseValue/0.261).toFixed(3)

        KiloToPound = (baseValue*2.204).toFixed(3)
        poundToKilo = (baseValue/2.204).toFixed(3)
    }

    meterAndFeetEl.textContent = `${baseValue} meters = ${meterToFeet} feet | ${baseValue} feet = ${feetToMeter} meters`
    litersAndGallonsEl.textContent = `${baseValue} liters = ${literTogallon} gallons | ${baseValue} gallons = ${gallonToLiter} liters`
    kiloAndPoundsEel.textContent = `${baseValue} kilos = ${KiloToPound} pounds | ${baseValue} pounds = ${poundToKilo} kilos`
}

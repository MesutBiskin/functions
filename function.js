function returnsSomething() {   // create a new function
    return 5;  //return the number 5
}

const value = returnsSomething() // call the function and store the value

console.log(value)


function celsiusToFahrenheit(celcius) {
    const temperature_in_faherenheit = celcius * (9 / 5) + 32
    //return celcius * 9 / 5 + 32
    return temperature_in_faherenheit

}
console.log(celsiusToFahrenheit(32) + '°F')




// Function Declaration: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Function Expression: Fahrenheit to Celsius
const fahrenheitToCelsius = function (fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
};

// Arrow Function: Celsius to Kelvin
const celsiusToKelvin = (celsius) => celsius + 273.15;

// Arrow Function: Kelvin to Celsius
const kelvinToCelsius = (kelvin) => kelvin - 273.15

function convertTemperature(){
    const temp = parseFloat(document.getElementById("temp").value)
    const convert = document.getElementById("Converter").value
    let result

    switch (convert){
        case 'CtoF':
            result = celsiusToFahrenheit(temp);
            break;
        case 'FtoC' : 
            result = fahrenheitToCelsius(temp);
            break;
        case 'CtoK' : 
            result = celsiusToKelvin(temp);
            break;
        case 'KtoC' :
            result = kelvinToCelsius(temp);
            break;
        default : 
            result = "Invalid Conversion Type!";
    }

    document.getElementById("result").innerHTML = result
}
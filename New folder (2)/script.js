var number = document.getElementById("user-input").value;
var outputE = document.getElementById("results-div");

    function check(){
    if(!number){
        alert("Please provide a phone number")
    }else if(number < 0) {
        outputE.innerHTML = "Please enter a number greater than or equal to 1";
    }else if(number > 3999) {
        outputE.innerHTML = "Please enter a number less than or equal to 3999";
    }else{
        const romanNumerals = [
            { value: 1000, symbol: "M" },
            { value: 900, symbol: "CM" },
            { value: 500, symbol: "D" },
            { value: 400, symbol: "CD" },
            { value: 100, symbol: "C" },
            { value: 90, symbol: "XC" },
            { value: 50, symbol: "L" },
            { value: 40, symbol: "XL" },
            { value: 10, symbol: "X" },
            { value: 9, symbol: "IX" },
            { value: 5, symbol: "V" },
            { value: 4, symbol: "IV" },
            { value: 1, symbol: "I" }
        ];
    
        let roman = "";
        for (let i = 0; i < romanNumerals.length; i++) {
            while (number >= romanNumerals[i].value) {
                roman += romanNumerals[i].symbol;
                number -= romanNumerals[i].value;
            }
        }
        outputE.innerHTML = roman;
    }
}
function clear(){
    let number = document.getElementById("user-input").value;
    let outputE = document.getElementById("results-div");
    if(!number){
        alert("Please provide a phone number")
    }else if(number < 0) {
        outputE.innerHTML = "Please enter a number greater than or equal to 1";
    }else if(number > 3999) {
        outputE.innerHTML = "Please enter a number less than or equal to 3999";
    }else{
        const romanNumerals = [
            { value: 1000, symbol: "M" },
            { value: 900, symbol: "CM" },
            { value: 500, symbol: "D" },
            { value: 400, symbol: "CD" },
            { value: 100, symbol: "C" },
            { value: 90, symbol: "XC" },
            { value: 50, symbol: "L" },
            { value: 40, symbol: "XL" },
            { value: 10, symbol: "X" },
            { value: 9, symbol: "IX" },
            { value: 5, symbol: "V" },
            { value: 4, symbol: "IV" },
            { value: 1, symbol: "I" }
        ];
    
        let roman = "";
        for (let i = 0; i < romanNumerals.length; i++) {
            while (number >= romanNumerals[i].value) {
                roman += romanNumerals[i].symbol;
                number -= romanNumerals[i].value;
            }
        }
        outputE.innerHTML = roman;
    }
}
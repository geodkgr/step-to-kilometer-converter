// one Step is equal to 0.000762 Kilometers.

const kilometer = 0.000762;
const result = document.querySelector("#resultKilometers");

function displayResult() {
    var input = document.getElementById("input");
    console.log(kilometer * input.value);
    result.innerHTML = kilometer * input.value;
}
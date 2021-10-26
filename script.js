
function temperatureConverter(valNum) {

    valNum = parseFloat(valNum);
    let result = document.getElementById("output").innerHTML = (valNum-32) / 1.8;
    console.log(result);

}
function temperatureConverter2(valNum2) {

    valNum2 = parseFloat(valNum2);
    let result2 = document.getElementById("output2").innerHTML = (valNum2*1.8) + 32;
    console.log(result2);

}


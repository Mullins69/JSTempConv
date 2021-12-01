
function celctofah(){
    let fah = document.getElementById("input1").value;;
    let converted = (Number(fah) * 1.8) + 32;
    if(fah == Number(fah)){
        document.getElementById("Output1").innerHTML = converted.toFixed(0) + "°F";
    }
    else{
        document.getElementById("Output1").innerHTML = "Enter Numbers only";
    }
    
}

function fahtocelc(){
    let celc = document.getElementById("input2").value;
    let converted = (Number(celc) - 32) * 5/9;
    if(celc == Number(celc)){
        document.getElementById("Output2").innerHTML = converted.toFixed(0) + "°C";
    }
    else{
        document.getElementById("Output2").innerHTML = "Enter Numbers only";
    }
}


const cel = document.getElementById("celcius");
const fah = document.getElementById("fahrenheit");
const kel = document.getElementById("kelvin");

function temp(event){
    const cur = event.target.value;

    switch(event.target.name){
        case "celcius":
            fah.value = (cur * 9/5)+32;
            kel.value = parseFloat(cur)+273.15;
            break;
        case "fahrenheit":
            cel.value = (cur-32)+5/9;
            kel.value = (cur-32)*5/9+273.15;
            break;
        case "kelvin":
            cel.value = cur-273.15;
            fah.value = (cur-273.15)*9/5+32;
            break;
        default:
            break;
    }
}
var btnConvert = document.getElementById('convert')
var input = document.getElementById('input')

btnConvert.addEventListener('click', () =>{
    var result =  input.value*388.77;
document.getElementById('output').innerHTML = result
})
let sideVal = document.getElementById("form-side");
sideVal.addEventListener('submit', function(event) {
// evita que o formulário recarregue depois de enviar as informações
event.preventDefault(); 

let squareSide = document.getElementById ('input-side').value;
console.log(squareSide)
let squareSidenum = Number(squareSide);

let valCm = ( squareSidenum * squareSidenum);
let valM = valCm / 100;

console.log(valCm + ' cm²');
console.log(valM+ ' m²');

document.getElementById('value-cm').innerHTML = (valCm + ' cm²');
document.getElementById('value-m').innerHTML = (valM+ ' m²');

});
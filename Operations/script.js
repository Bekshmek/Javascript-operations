function multiply() {
  var x1 = document.getElementById('mult_1').value;
  var x2 = document.getElementById('mult_2').value;
  var result = document.getElementById('mult_result');
  result.innerHTML = 'Result: ' + (x1 * x2);
}
function divide() {
  var x1 = document.getElementById('mult_1').value;
  var x2 = document.getElementById('mult_2').value;
  var result = document.getElementById('mult_result');
  result.innerHTML = 'Result: ' + (x1/x2);
}
function toCelsius(){
  var fahrenVal = document.getElementById('fahren').value;
  document.getElementById('celsius').value = (5*(fahrenVal-32))/9;
}
function toFahrenheit(){
  var celsiusVal = document.getElementById('celsius').value;
  document.getElementById('fahren').value = ((celsiusVal/5)*9)+32;
}
function calculateVolume(){
  var radius = document.getElementById('radius').value;
  document.getElementById('volume_result').innerHTML = "Result: " + ((4/3)*3.14*(radius*radius*radius));
}
function reverseString(){
  var string = document.getElementById('string').value;
  document.getElementById('reverse_result').innerHTML = 'Result: ' + string.split("").reverse().join("");
}

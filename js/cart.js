var quantatyHTML = document.getElementById("quantaty").innerHTML;
var quantityNumber = parseInt(quantatyHTML, 10);
var TotalHTML = document.getElementById("Total").innerHTML;
var totalNumber = parseInt(TotalHTML, 10);

function UP() {
  quantityNumber++;
  document.getElementById("quantaty").innerHTML = quantityNumber;
  total();
}
function Down() {
  if (quantityNumber > 0) {
    quantityNumber--;
    document.getElementById("quantaty").innerHTML = quantityNumber;
    total();
  }
}
function total() {
  totalNumber = quantityNumber * 130;
  document.getElementById("Total").innerHTML = totalNumber;
}

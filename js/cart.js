var quantatyHTML = document.getElementById("quantaty").innerHTML;
var quantityNumber = parseInt(quantatyHTML, 10);
var TotalHTML = document.getElementById("Total").innerHTML;
var totalNumber = parseInt(TotalHTML, 10);

function UP() {
  if (quantityNumber < 5) {
    quantityNumber++;
    document.getElementById("quantaty").innerHTML = quantityNumber;
    total();
  } else {
    ("you cant buy more than 5 of the same product");
  }
}
function Down() {
  if (quantityNumber > 0) {
    quantityNumber--;
    document.getElementById("quantaty").innerHTML = quantityNumber;
    total();
  } else {
    ("you cant buy less than 0 products");
  }
}
function total() {
  totalNumber = quantityNumber * 130;
  document.getElementById("Total").innerHTML = totalNumber;
}

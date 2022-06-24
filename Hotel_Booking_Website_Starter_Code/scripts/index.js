var secondcard = document.getElementById("secondcard");
var lessbtn = document.getElementById("lessbtn");
var morebtn = document.getElementById("morebtn");

function viewmore(){
    secondcard.style.display = "grid";
    lessbtn.style.display = "inline";
    morebtn.style.display = "none";
}
function viewless(){
    secondcard.style.display = "none";
    morebtn.style.display ="inline";
    lessbtn.style.display = "none";
} 
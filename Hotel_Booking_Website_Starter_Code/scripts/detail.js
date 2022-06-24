let numadult = document.getElementById("numadult");
let name = document.getElementById("name");

let price = document.getElementById("price");

// var day1 = new Date(fromdate.value);
// var day2 = new Date(todate.value);
// console.log(day1);
// console.log(day2);
// var difference= Math.abs(day2-day1);
// days = difference/(1000 * 3600 * 24)
// const dateOne = new Date(fromdate.value); // 20th April 2021
// const dateTwo = new Date(todate.value); // 10th April 2021
// console.log(dateOne.getDate() - dateTwo.getDate());
// console.log(days)

function calculator() {
  let fromdate = new Date(document.getElementById("fromdate").value);
  let todate = new Date(document.getElementById("todate").value);

  if(todate>fromdate){

  let difference = todate.getTime() - fromdate.getTime();
  let msInDay = 1000 * 3600 * 24;
  let days = difference / msInDay;
  let t = 1000 * numadult.value * days;
  price.value = t;
}
else{
    price.value = 0;
}
}
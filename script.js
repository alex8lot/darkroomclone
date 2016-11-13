var wood = 0;
var w = document.getElementById("woodAmount");
var wb = document.getElementById("woodButton");
var lfb = document.getElementById("fireButton");

/*
                EVENT LISTENERS
*/

wb.addEventListener("click", function(){  getWood(1); });
lfb.addEventListener("click", lightFire);

//checkWoodForFire checks if the wood is equal to 5, and then makes the fire button visible and stops the myVar timeout.
function checkWoodForFire() {    
if (wood === 5) {
  document.getElementById("fireButton").style.visibility = "visible";
  clearInterval(myVar);
}
}

function lightFire() {

};

function getWood(number) {
    wood = wood + number;
    w.innerHTML = wood;
    wb.className += " disabledDiv";
    setTimeout(woodButtonEnable, 5000);
};

function woodButtonEnable() {
    wb.className = "noSelect";
}

var myVar = window.setInterval(function() {
  checkWoodForFire();
  //console.log("test");
}, 1000);

/*
window.setInterval(function() {

  pokeClick(caterpie * 1);
  pokeClick(rattata * 10);
  pokeClick(pidgey * 5);
  pokeClick(shellder * 25);

}, 1000);
*/



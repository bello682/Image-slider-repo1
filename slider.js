/*
var counter = 1;

const radioSelect = document.querySelector("input[type='radio']");

setInterval(() => {
    document.getElementById('radioSelect' + counter). checked = true; 
    counter++;

    if (counter > 9) {
        counter = 1;
    }
}, 5000);

*/

// const radioSelec = document.querySelector("#radio-1");
// const radioSele = document.querySelector("#radio-2");
// const radioSel = document.querySelector("#radio-3");
// const radioSe = document.querySelector("#radio-4");
// const radioS= document.querySelector("#radio-5");
// const radio = document.querySelector("#radio-6");
// const radi = document.querySelector("#radio-7");
// const rad = document.querySelector("#radio-8");
// const ra = document.querySelector("#radio-9");

// const multiRadio = [radioSelec, radioSele, radioSel, radioSe, radioS, radio, radi, rad, ra];

// multiRadio.addEventListener('scroll', unScroll)

// var counter = 1;

// unScroll(e) {
//    const  mRadio = "multiRadio";

//     setInterval(function(mRadio) {
//         document.querySelector(mRadio + counter).checked = true;
//         counter++;

//         if(counter > 9) {
//            counter = 1
//         }
//    }, 2000);
// };

/*
var counter = 1;


const radioSelec = document.querySelector("#radio-1");
const radioSele = document.querySelector("#radio-2");
const radioSel = document.querySelector("#radio-3");
const radioSe = document.querySelector("#radio-4");
const radioS= document.querySelector("#radio-5");
const radio = document.querySelector("#radio-6");
const radi = document.querySelector("#radio-7");
const rad = document.querySelector("#radio-8");
const ra = document.querySelector("#radio-9");

 const multiRadio = ["radioSelec", "radioSele", "radioSel", "radioSe", "radioS", "radio", "radi", "rad", "ra"];

  multiRadio.addEventListener('scroll', function(event) {

    setInterval(function() {
    document.getElementsById('radio' + counter).checked = true;
    counter++;
    if (counter > 9) {
      counter = 1;
    }
  }, 2000);

  });

*/

const confirmation = prompt("Do you want to continue? Type 'yes' or 'no'");

if (confirmation === "yes") {
	// User wants to continue, do something here...
	alert("Great, let's continue!");
} else if (confirmation === "no") {
	// User wants to cancel, close the window
	window.close();
} else {
	// User entered an invalid response
	alert("Please enter either 'yes' or 'no'");
}

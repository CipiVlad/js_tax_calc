// console.log("text");




// ################## variablen ########################

const mwstaufschlagen = document.getElementById('mwstaufschlagen');
const mwstabziehen = document.getElementById('mwstabziehen');

const nine = document.getElementById('nine');
const seven = document.getElementById('seven');



const inputNettoBetrag = document.getElementById("inputNettoBetrag");
// const formel = (inputNettoBetrag.value * (19 / 100)) + inputNettoBetrag;

// string to number conversion
// parseInt()


// ################## input / Rückgabe ##################




// ################## function ##########################


const bruttoMwst19 = () => {

    console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
}
bruttoMwst19();

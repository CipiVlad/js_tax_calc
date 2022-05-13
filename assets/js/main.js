// console.log("text");




// ################## variablen ########################

const mwstaufschlagen = document.getElementById('mwstaufschlagen');
const mwstabziehen = document.getElementById('mwstabziehen');

const nineteen = document.getElementById('nineteen');
const seven = document.getElementById('seven');


const inputNettoBetrag = document.getElementById("inputNettoBetrag");

// string to number conversion
// parseInt()

let brutto = document.getElementById('brutto');
let mwstbetrag = document.getElementById('mwstbetrag');



// ################## function bruttoMwst ##########################


const bruttoMwst = () => {

    // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
    // console.log(parseInt((inputNettoBetrag.value)) * (0.07) + parseInt((inputNettoBetrag.value)));

    if (nineteen.checked && mwstaufschlagen.checked && inputNettoBetrag.value) {
        console.log('it works');
        console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));

        mwstbetrag.innerHTML = parseInt((inputNettoBetrag.value)) * (0.19);
        // Bruttobetrag ins HTML ausgeben
        brutto.innerHTML = parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value));

    } else {
        brutto.innerHTML = `Das geht so nicht, Mensch!`;
        console.log("it's not working");
    }


}
// bruttoMwst();




// ################## conditions ##########################
// wenn:
//  radio buttons mwstaufschlagen && nineteen checked && inputNettobetrag.value eingetragen sind
//   if (nineteen.checked && mwstaufschlagen.checked && inputNettoBetrag.value)


// dann: sag mir es funktioniert, berechne den Bruttobetrag und gib diesen in der console.log() aus, 
// und in der Zeile Bruttobetrag(Endpreis), 
// und gib die Differenz aus brutto und inputNettoBetrag in Mehrwertstuerbetrag aus
// console.log('it works');
// console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));



// ansonsten:
// else {
    // brutto.innerHTML = `Das geht so nicht, Mensch!`;
// 
//     console.log("it's not working");
// }
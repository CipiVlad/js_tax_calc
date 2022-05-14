// ################## variablen ########################

const mwstaufschlagen = document.getElementById('mwstaufschlagen');
const mwstabziehen = document.getElementById('mwstabziehen');

const nineteen = document.getElementById('nineteen');
const seven = document.getElementById('seven');

let headlineInputBetrag = document.getElementById('headlineInputBetrag');
let endpreis = document.getElementById('endpreis');
const inputNettoBetrag = document.getElementById("inputNettoBetrag");

// string to number conversion
// parseInt()

let brutto = document.getElementById('brutto');
let mwstbetrag = document.getElementById('mwstbetrag');




// ################## function bruttoMwst ##########################


const bruttoMwst = () => {

    // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
    // console.log(parseInt((inputNettoBetrag.value)) * (0.07) + parseInt((inputNettoBetrag.value)));

    // Condition für : Mehrwertsteur aufschlagen checked, 19% checked

    if (nineteen.checked && mwstaufschlagen.checked && inputNettoBetrag.value) {
        // console.log('it works');
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));

        mwstbetrag.innerHTML = parseInt((inputNettoBetrag.value)) * (0.19);

        // Bruttobetrag ins HTML ausgeben
        brutto.innerHTML = parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value));
    }
    // Condition für : Mehrwertsteur aufschlagen checked, 7% checked

    else if (seven.checked && mwstaufschlagen.checked && inputNettoBetrag.value) {
        // console.log('it works');
        // console.log(parseInt((inputNettoBetrag.value)) * (0.07) + parseInt((inputNettoBetrag.value)));
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));

        mwstbetrag.innerHTML = parseInt((inputNettoBetrag.value)) * (0.07);
        // Bruttobetrag ins HTML ausgeben
        brutto.innerHTML = parseInt((inputNettoBetrag.value)) * (0.07) + parseInt((inputNettoBetrag.value));



        // -----------------------------------------------------------------------------------------------//----




        // Condition für : Mehrwertsteur abziehen checked, 19% checked

    } else if (nineteen.checked && mwstabziehen.checked && inputNettoBetrag.value) {
        // console.log('it works');
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));
        mwstbetrag.innerHTML = parseInt((inputNettoBetrag.value)) * (0.16);
        headlineInputBetrag.innerHTML = `Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro`;

        // Bruttobetrag ins HTML ausgeben
        brutto.innerHTML = parseInt((inputNettoBetrag.value)) - parseInt((inputNettoBetrag.value)) * (0.16);
        endpreis.innerHTML = `Nettobetrag`;


        // Condition für : Mehrwertsteur abziehen checked, % checked


    } else if (seven.checked && mwstabziehen.checked && inputNettoBetrag.value) {
        // console.log('it works');
        // console.log(parseInt((inputNettoBetrag.value)) * (0.07) + parseInt((inputNettoBetrag.value)));
        // console.log(parseInt((inputNettoBetrag.value)) * (0.19) + parseInt((inputNettoBetrag.value)));

        mwstbetrag.innerHTML = parseInt((inputNettoBetrag.value)) * (0.06);
        headlineInputBetrag.innerHTML = `Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro`;

        // Bruttobetrag ins HTML ausgeben
        brutto.innerHTML = parseInt((inputNettoBetrag.value)) - parseInt((inputNettoBetrag.value)) * (0.06);
        endpreis.innerHTML = `Nettobetrag`;

    }


    // -----------------------------------------------------------------------------------------------//----


    // Ausgabe bei fehlender/mangelhafter Auswahl des Users

    else {
        brutto.innerHTML = `Das geht so nicht, Mensch!`;
        console.log("it's not working");
    }

}




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






// devo creare una griglia di dimensioni 10 x 10 (posso già pensarla in base al fatto che poi dovra essere 9 x 9 e 7 x 7?)
// inizio creando un ciclo for per stampare i numeri da 1 a 100
let boxQuantity = 100;

let gridBoxNumber = [];
const gridContainer = document.querySelector(".grid-container");
for ( let i = 1; i <= boxQuantity; i++ ) {

    const boxNumber = boxQuantity[i];

    const gridBox = document.createElement("div");
    gridBox.innerHTML = `<span>${boxNumber}</span>`;

    gridBox.classList.add("grid-box");

    gridContainer.append(gridBox);
}
console.log(gridBoxNumber);
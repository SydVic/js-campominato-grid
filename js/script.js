// devo creare una griglia di dimensioni 10 x 10 (posso già pensarla in base al fatto che poi dovra essere 9 x 9 e 7 x 7?)
// inizio creando un ciclo for per stampare i numeri da 1 a 100

let boxQuantity = 100;


const gridContainer = document.querySelector(".grid-container");
for ( let i = 1; i <= boxQuantity; i++ ) {

    // assegno il numero al box
    const boxNumber = i;
    console.log(boxNumber);
    
    // creo l'elemento in html con il numero al suo interno
    const gridBox = document.createElement("div");
    gridBox.innerHTML = `<span>${boxNumber}</span>`;

    // aggiungo la classe css
    gridBox.classList.add("grid-box");

    // gestione click elemento
    gridBox.addEventListener("click", function() {
        this.classList.add("clicked");
    })

    // inserisco gli elementi nel container
    gridContainer.append(gridBox);
}

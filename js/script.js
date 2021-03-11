// mi richiamo il button che genererà tutte le funzioni
var btn = document.getElementById('calculate');

//  quando clicco sul bottone si deve attivare una funzione
btn.addEventListener('click', function(){

  // per prima cosa va compilato il nome panino
  // (la compilazione finisce nel .value)
  var burgerName = document.getElementById('burger-name').value;

  // si aprono 2 strade: se il campo è compilato o se non lo è
  if (burgerName.length < 1){

    // non compilato, esce alert
    alert("dimmi il nome del panino!")
  } else{

    // compilato si va avanti con gli ingredienti da sommare al totale
    var total = 10;
    var ingredBox = document.getElementsByClassName('ingred');

    //nell "array" che ho creato ci aggancio un ciclo
    for (var i=0; i < ingredBox.length; i++) {
      var ingred = ingredBox[i];
      var isChecked = ingred.checked; // checked è una funzione di JS per capire se una cosa è spuntata
      var addPrice = parseInt(ingred.dataset.price); // il dataset è un altra funzine. serve a prendere il valore in html del mio "data-price", quindi riporto anche il valore dopo il data-, in questo caso price

      // se viene quindi selezionato un ingrediente va in aggiunta al totale
      if (isChecked){
        total = total + addPrice;
      }
    }

    // sezione degli sconti che metto dentro un array
    var coupons = ["aaa", "sss", "ddd"];

    // se quello che inserisco combacia con un elemento dentro array applico sconto
    var discount = document.getElementById('burger-coupon').value;
    if (coupons.includes(discount)){ // .includes è una funzione di JS che fa la comparazione tra 2 elementi
      total = total * 0.8;

    } else{
      console.log("nessuno sconto");
    }

    // vado a stampare in html il costo
    var totalFinal = document.getElementById('price');
    totalFinal.innerHTML = Math.round(total); // arrotondo al più vicino
  }
});

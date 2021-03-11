// mi richiamo il button che genererà tutte le funzioni
var btn = document.getElementById('calculate');

//  quando clicco sul bottone si deve attivare una funzione
btn.addEventListener('click', function(){

  // per prima cosa va compilato il nome panino
  // (la compilazione finisce nel .value)
  var burgerName = document.getElementById('burger-name').value;

  // si aprono 2 strade: se il campo è compilato o se non lo è
  if (burgerName.length < 1){
    alert("dimmi il nome del panino!")
  } else{
    console.log("maggiore di 1");
  }





});

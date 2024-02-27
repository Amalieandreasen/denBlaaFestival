
//først oprettes der 2 variabler får når burgermenuen er åben og hvornår den er åben
//Disse variabler tildeles de 2 klasser .ham-menu og .off-menu
const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-menu');

//her tiløjes en event listener med et click fra brugeren
//når der trykker på hamMenu classen så skifter tilstanden imellem active og ikke active. 
// i css har vi tilføjet active til en class uden den er i html. 
//Derved bliver denne class tilføjet hvis den ikke er der ved klik, og hvis den er der ved klik vil den blive fjernet
hamMenu.addEventListener('click', ()=>{
   hamMenu.classList.toggle('active');
   offScreenMenu.classList.toggle('active')
})
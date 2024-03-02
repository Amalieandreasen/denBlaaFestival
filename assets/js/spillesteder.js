const spillesteder = [
{
name: "Kaffefair",
picture: "spillesteder_kaffefair.png",
//Disse booleans var et forsøg på at bruge bool til et en sorteringsmetode
udendørs: false, 
vin: false,
madOgDrikke: true,
bar: false, 
handicapvenligt: true,
location: "Strandvejen 19 9000 Aalborg",
icons: {
    handicapvenligtIcon: "./assets/img/icons/wheelchair-move-solid.svg", 
    madOgDrikkeIcon: "./assets/img/icons/utensils-solid.svg",
    vinIcon: null, 
    udendørsIcon: null,
    drinksIcon: null
}
},
{
    name: "Bluesscenen",
    picture: "spillesteder_bluesscenen.png",
    udendørs: true, 
    vin: false,
    madOgDrikke: false,
    bar: false, 
    handicapvenligt: true,
    location: "Tolbod plads, 9000 Aalborg",
    icons: {
        handicapvenligtIcon: "./assets/img/icons/wheelchair-move-solid.svg", 
        madOgDrikkeIcon: null,
        vinIcon: null, 
        udendørsIcon: "./assets/img/icons/sun-icon.svg",
        drinksIcon: null
    }
},
{
    name: "Jazzscenen",
    picture: "spillesteder_jazzscenen.png",
    udendørs: true, 
    vin: false,
    madOgDrikke: false,
    bar: false, 
    handicapvenligt: true,
    location: "Gammeltorv, 9000 Aalborg",
    icons: {
        handicapvenligtIcon: "./assets/img/icons/wheelchair-move-solid.svg", 
        madOgDrikkeIcon: null,
        vinIcon: null, 
        udendørsIcon: "./assets/img/icons/sun-icon.svg",
        drinksIcon: null
    }
},
{
    name: "D'Wine Bar",
    picture: "spillesteder_dwine.png",
    udendørs: false, 
    vin: true,
    madOgDrikke: false,
    bar: false, 
    handicapvenligt: true,
    location: "Algade 54, 9000 Aalborg",
    icons: {
        handicapvenligtIcon: "./assets/img/icons/wheelchair-move-solid.svg", 
        madOgDrikkeIcon: null,
        vinIcon: "./assets/img/icons/wine-glass-solid.svg", 
        udendørsIcon: null,
        drinksIcon: null
    }
},
{
    name: "Salling ROOGTOP",
    picture: "spillesteder_salling.png",
    udendørs: true, 
    vin: false,
    madOgDrikke: true,
    bar: true, 
    handicapvenligt: true,
    location: "Nytorv 8, 9000 Aalborg",
    icons: {
        handicapvenligtIcon: "./assets/img/icons/wheelchair-move-solid.svg", 
        madOgDrikkeIcon: "./assets/img/icons/utensils-solid.svg",
        vinIcon: null, 
        udendørsIcon: "./assets/img/icons/sun-icon.svg",
        drinksIcon: "./assets/img/icons/martini-glass-solid.svg"
    }
},
]

const cardDivEl = document.querySelector(".cardDiv"); 

const madOgDrikkeBtnEl = document.querySelector('madOgDrikkeBtn');
const barBtnEl = document.querySelector('barBtn');
const vinbarBtnEl = document.querySelector('vinbarBtn');
const udendøresBtnEl = document.querySelector('udendøresBtn');
const handicapvenligBtnEl = document.querySelector('handicapvenligBtn');



/* Her lavers en funktion til at kunne finde de forskellige ikoner til spillestederne*/
function generateIconsHTML(icons) {
    let iconsHTML = '';
  
    /* Vi bruge denne metode til at loope igennem alle icons' keys og values i vores Array
    object.entries bruges til ay konvertere icons indtil et array af keys og values
    */
    Object.entries(icons).forEach(([key, value]) => {
        /* Her bruges en if statement til at finde ud af om value IKKE er null*/
      if (value !== null) {
        /* Her bliver de forskellige ikoners value sat som src, hvilket er stien som er angivet i arrayet, og alt værdien = vores key. Fx: handicapvenligtIcon */
        iconsHTML += `<img src="${value}" alt="${key}">`;
      }
    });
    
    return iconsHTML;
  }

  /* 
  Vi bruger et forEach loop til at generere indhold på vores HTML side 
  Her bruges funktionen som blev lavet ovenover til at indsætte diverse ikoner hvis de ikke = null i arrayet
  */

spillesteder.forEach(function (sted) {
    cardDivEl.innerHTML += `
      <div class="cardDiv">
      <div class="spillested">
        <h3>${sted.name}</h3>
        <div>
          <img src="./assets/img/pictures/spillesteder/${sted.picture}" alt="">
        </div>
        <p>${sted.location}</p>
        <div class="icons">
          ${generateIconsHTML(sted.icons)}
        </div>
        <a href="#"><button>Se hele programmet her</button></a>
        </div>
      </div>
    `;
  });

  

  function getOutdoor(){
  const cardDivEl = document.querySelector(".cardDiv"); 
  const udendøresBtnEl = document.querySelector('udendøresBtn');
  cardDivEl.innerHTML = '';
    spillesteder.forEach(function(sted){
      if(sted.udendørs){
        getCardsSorting(sted);
      }
  });
}

function getMadOgDrikke(){
  const cardDivEl = document.querySelector(".cardDiv"); 
  const udendøresBtnEl = document.querySelector('udendøresBtn');
  cardDivEl.innerHTML = '';
    spillesteder.forEach(function(sted){
      if(sted.madOgDrikke){
        getCardsSorting(sted);
      }
  });
}

function getBar(){
  const cardDivEl = document.querySelector(".cardDiv"); 
  const udendøresBtnEl = document.querySelector('udendøresBtn');
  cardDivEl.innerHTML = '';
    spillesteder.forEach(function(sted){
      if(sted.bar){
        getCardsSorting(sted);
      }
  });
}

function getVin(){
  const cardDivEl = document.querySelector(".cardDiv"); 
  const udendøresBtnEl = document.querySelector('udendøresBtn');
  cardDivEl.innerHTML = '';
    spillesteder.forEach(function(sted){
      if(sted.vin){
        getCardsSorting(sted);
      }
  });
}

function getHandicap(){
  const cardDivEl = document.querySelector(".cardDiv"); 
  const udendøresBtnEl = document.querySelector('udendøresBtn');
  cardDivEl.innerHTML = '';
    spillesteder.forEach(function(sted){
      if(sted.handicapvenligt){
        getCardsSorting(sted);
      }
  });
}




  function getCardsSorting(sted){
    
    cardDivEl.innerHTML += `
      <div class="cardDiv">
      <div class="spillested">
        <h3>${sted.name}</h3>
        <div>
          <img src="./assets/img/pictures/spillesteder/${sted.picture}" alt="">
        </div>
        <p>${sted.location}</p>
        <div class="icons">
          ${generateIconsHTML(sted.icons)}
        </div>
        <a href="#"><button>Se hele programmet her</button></a>
        </div>
      </div>
    `;
  }

  //Denne skal kunne filtrere efter steder hvor madOgDrikke = true
 
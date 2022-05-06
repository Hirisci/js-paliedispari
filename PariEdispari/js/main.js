/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                        FUNZIONI
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
  // ritorna un numero Random che parte da MIN e arriva sino a MAX 
  function rndRangeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  // ritorna true se il numero é pari
  function isEven(num){
    return n%2===0;
  }


/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------
CONSEGNA EXERCIZIO

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

---------------------------------------------------------------------------------------------*/
let winUser;
do{
    winUser = prompt("Scegli Pari o Dispari")
    winUser = winUser.toLocaleLowerCase()
} while( winUser !== "pari" &&  winUser !== "dispari")

let numUser;
do{
    numUser = Number(prompt("inserisci un numero tra 1 e 5"));
} while((numUser<1 || numUser>5) || isNaN(numUser)) 


const numCPU = rndRangeNumber(1,6);
const sommaNum = numCPU + numUser;
console.log(winUser,numUser, numCPU, sommaNum)

if((isEven(sommaNum) && winUser==="pari") || (!isEven(sommaNum) && winUser==="dispari")){ 
    console.log("hai vinto!")
} else { 
    console.log('hai perso')  
}







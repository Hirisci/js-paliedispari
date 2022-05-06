/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                        FUNZIONI
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/

  function validateNumber(msg){
    do{
        let input = Number(prompt(msg))
    }while(isNaN(input))

    return input;
  }

  function isPalindroma(msg){
      let controllore = true
      for(let i =0 ; i<msg.length; i++){
          if(msg[i]!==msg[msg.length-i-1]){
              controllore = false;
            }  
            console.log(msg[i], msg[msg.length-i-1],controllore)
      }
      console.log(controllore)
      return controllore;
  }



/*╔══════════════════════════════════════════════════════════════════════════════════════════╗
                                            MAIN
  ╚══════════════════════════════════════════════════════════════════════════════════════════╝*/
/* --------------------------------------------------------------------------------------------
CONSEGNA EXERCIZIO

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

---------------------------------------------------------------------------------------------*/


const msg = prompt("Digita una parola Palindroma")
if(isPalindroma(msg)){
    console.log("La parola inserita é una parola Palindroma")
}else{
    console.log("La parola inserita non é una parola Palindroma")
}


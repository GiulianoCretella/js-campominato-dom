    function getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max -min) + min);
    }

    function selezioneLivello() {
        bombsArray.length= 0;
        let difficoltà = document.getElementById("difficoltàMenu");
        let indiceOpzione = difficoltà.selectedIndex;
        let opzione = difficoltà.options[indiceOpzione];
        console.log(opzione.value)
        let colNumber;
        if(opzione.value === 'easy'){
            colNumber = 100;
        } else if(opzione.value === 'medium'){
            colNumber = 81;
        } else{ 
            colNumber = 49;
        }
        let colsPerSide = Math.sqrt(colNumber);
        console.log (colsPerSide);
        genBombs(colNumber)
        stampareGriglia(colNumber,colsPerSide);
    }
    let bombsArray = [];
    let bombNumber = 16;
    let attempt = 0;
    let maxAttempts; 
    // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    // I numeri nella lista delle bombe non possono essere duplicati.
    // generare sedici numeri da 1 a sedici nel range della difficoltà 
    // non far duplicare i numeri della lista 

    function stampareGriglia(colNumber, colsPerSide) {
        console.log(colNumber);
        let bloccoCentrale = document.querySelector('.my_container');
        bloccoCentrale.innerHTML='';
        let mainRow = document.createElement('div');
        mainRow.setAttribute('class','row main_row')
        for (let i = 1;  i<= colNumber; i++){
            const cols = stampaCella(i, colsPerSide); 
            mainRow.append(cols);
        }
        bloccoCentrale.append(mainRow);
    }

    function genBombs(colNumber){
        maxAttempts = colNumber - bombNumber;
        for( let i = 1; bombsArray.length < bombNumber;i++){
            let bombsInn = getRandomInt(1, colNumber)
           if(!bombsArray.includes(bombsInn)){
               bombsArray.push(bombsInn)
           }
        }
    }
    function stampaCella(colNumber,colsPerSide){
        let cols = document.createElement('div');
        cols.setAttribute('class', 'col my-col');
        cols.style.flex = `0 0 calc(100% / ${colsPerSide})`;
        cols.style.height = `calc(100% / ${colsPerSide})`;
        cols.innerHTML = `<span> ${colNumber} </span>`;
        cols.addEventListener('click', cambiaColore);
        return cols
    }
    function cambiaColore(){
       let num = parseInt(this.innerText);
       console.log(num)
       if(bombsArray.includes(num)){
           this.innerHTML = `<img class="img-fluid" src="./img/5a371a5a34df47.5239089615135606662166.png" alt="bomba"></img>`
           this.style.background = "red";
           this.style.color = "white"; 
           gameover()
        } else {
            this.style.background = "#6495ED";
            this.style.color = "white";
            attempt++;
            if(attempt===maxAttempts){
            gameover()
            }
        }

      
    }
   function gameover(){
       alert('Hai Perso!');
       let caselle = document.querySelectorAll('.my-col');
       console.log('leggo array',caselle);
       for(let i = 0; i < caselle.length; i++){
           if(bombsArray.includes(i + 1)){
               caselle[i].style.background = "red";
               caselle[i].style.color = "white"; 
               caselle[i].innerHTML = `<img class="img-fluid" src="./img/5a371a5a34df47.5239089615135606662166.png" alt="bomba"></img>`
           }
       }

   }
document.getElementById('bottonePlay').addEventListener('click', selezioneLivello);
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// generare sedici numeri da 1 a sedici nel range della difficoltà 
// non far duplicare i numeri della lista 
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max -min) + min);
}

// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// nella funzione colora se clicchiamo su una bomba deve colorarsi di rosso faccio terminare la partita
// altrimenti di blu e continuo a giocare
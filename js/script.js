    
     function selezioneLivello() {
      
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
        this.style.background = "#6495ED";
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

let bombsArray = [];
let bombNumber = 16;

function genBombs(colNumber){
    for( let i = 1; bombsArray.length < bombNumber;i++){
        let bombsInn = getRandomInt(1, colNumber)
       if(!bombsArray.includes(bombsInn)){
           bombsArray.push(bombsInn)
       }
       console.log(bombsArray)
    }

}
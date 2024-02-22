<template>
  <div>
    <div class="title">
      <h1>TIC TAC TOE!</h1>
    </div>
  <div class="container">
    <div class="grid">
      <div v-for="id in gridIds" :key="id" class="col" :id="id" @click="click(id)">
        <div class="containerImg">
          <img :src="getIcon(id)" />
        </div>
      </div>
    </div>
  </div>
  <div v-if="winner" class="winner-message">
      <h3 class="winnerText">{{ winner }} ha vinto la partita!!</h3>
      <div class="buttonDiv">
        <h3>Vuoi ricominciare la partita?</h3>
        <h3>=></h3>
        <button class="buttonWinner" @click="reset">RESET</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import O from './components/icons/iconO.png';
import X from './components/icons/iconX.png';

export default {
  setup() {
    const icons = ref(Array(9).fill(null));
    const isClicked = ref(Array(9).fill(false));
    const countClick = ref(0);
    const firstPlayer = prompt('nome primo giocatore');
    const secondPlayer = prompt('nome secondo giocatore');
    const winner = ref(null);
    const winningCombos = [
      ['N1', 'N2', 'N3'], // Righe
      ['N4', 'N5', 'N6'],
      ['N7', 'N8', 'N9'],
      ['N1', 'N4', 'N7'], // Colonne
      ['N2', 'N5', 'N8'],
      ['N3', 'N6', 'N9'],
      ['N1', 'N5', 'N9'], // Diagonali
      ['N3', 'N5', 'N7']
    ];

    const click = (id) => {
      const input = gridIds.indexOf(id);
      if (input !== -1 && !winner.value && !isClicked.value[input]) {
        // Imposta l'icona in base al numero di click totali
        icons.value[input] = countClick.value % 2 === 0 ? X : O;
        // Incrementa il numero di click totali
        countClick.value++;
        // Imposta la casella come cliccata
        isClicked.value[input] = true;
        // Controlla se c'è un vincitore dopo ogni click
        checkWinner();
      }
    };


    const checkWinner = () => {
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (
          icons.value[gridIds.indexOf(a)] &&
          icons.value[gridIds.indexOf(a)] === icons.value[gridIds.indexOf(b)] &&
          icons.value[gridIds.indexOf(a)] === icons.value[gridIds.indexOf(c)]
        ) {
          winner.value = icons.value[gridIds.indexOf(a)];

          if(winner.value === '/src/components/icons/iconX.png'){
              winner.value = firstPlayer;
          }else{
            winner.value = secondPlayer;
          }

          break; // Esci dal ciclo se c'è un vincitore
        }
      }
    };

    const reset = () => {
        // Reimposta le icone a null
        icons.value = Array(9).fill(null);
        // Reimposta lo stato di cliccate a falso
        isClicked.value = Array(9).fill(false);
        // Reimposta il numero di click a 0
        countClick.value = 0;
        // Reimposta il vincitore a null
        winner.value = null;
    };

    const getIcon = (id) => {
      const input = gridIds.indexOf(id);
      return input !== -1 ? icons.value[input] : '';
    };

    const gridIds = ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7', 'N8', 'N9'];

    return {
      icons,
      click,
      getIcon,
      gridIds,
      winner,
      reset
    };
  }
}
</script>

<style>

.container {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonne per riga */
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  padding: 35px;
}

img {
  width: 50px;
}

.containerImg {
  display: flex;
  justify-content: center;
  align-items: center;
}

.winnerText{
  margin-top: 5px;
  text-align: center;
  text-decoration: underline;
}

.buttonWinner{
  padding: 5px;
  border: 1px solid black;
  border-radius: 15%;
  background-color: white;
  cursor: pointer;

}

.title{
  text-align: center;
  margin-bottom: 20px;
  background-color: rgba(2, 2, 2, 0.24);
  border: 2px solid black;
}

.buttonDiv{
  display: flex;
  justify-content: space-evenly;

}
</style>

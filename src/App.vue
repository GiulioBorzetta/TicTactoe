<template>
  <div>
    <div class="title">
      <h1>TIC TAC TOE!</h1>
    </div>
    <div class="container">
      <div class="grid">
        <div
          v-for="id in gridIds"
          :key="id"
          class="col"
          :id="id"
          @click="click(id)"
        >
          <div class="containerImg">
            <img :src="getIcon(id)" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="winner">
      <h3 class="winnerText">{{ winner }} ha vinto la partita!!</h3>
      <div class="buttonDiv">
        <h3>Vuoi ricominciare la partita?</h3>
        <h3>=></h3>
        <button class="buttonWinner" @click="reset">RESET</button>
      </div>
    </div>
    <div v-if="pair">
      <h3 class="winnerText">PAREGGIO!</h3>
      <div class="buttonDiv">
        <h3>Vuoi ricominciare la partita?</h3>
        <h3>=></h3>
        <button class="buttonWinner" @click="reset">RESET</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import O from "./components/icons/iconO.png";
import X from "./components/icons/iconX.png";

export default {
  setup() {
    const icons = ref(Array(9).fill(null));
    const isClicked = ref(Array(9).fill(false));
    const countClick = ref(0);
    const firstPlayer = prompt("nome primo giocatore");
    const secondPlayer = prompt("nome secondo giocatore");
    const winner = ref(null);
    const pair = ref(null);
    const winningCombos = [
      ["N1", "N2", "N3"],
      ["N4", "N5", "N6"],
      ["N7", "N8", "N9"],
      ["N1", "N4", "N7"],
      ["N2", "N5", "N8"],
      ["N3", "N6", "N9"],
      ["N1", "N5", "N9"],
      ["N3", "N5", "N7"],
    ];

    const click = (id) => {
      const input = gridIds.indexOf(id);
      if (input !== -1 && !winner.value && !isClicked.value[input]) {
        icons.value[input] = countClick.value % 2 === 0 ? X : O;
        countClick.value++;
        isClicked.value[input] = true;
        checkWinner();
      }
    };

    const checkWinner = () => {
      let allClicked = true;

      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (
          icons.value[gridIds.indexOf(a)] &&
          icons.value[gridIds.indexOf(a)] === icons.value[gridIds.indexOf(b)] &&
          icons.value[gridIds.indexOf(a)] === icons.value[gridIds.indexOf(c)]
        ) {
          winner.value =
            icons.value[gridIds.indexOf(a)] === X ? firstPlayer : secondPlayer;
          return;
        }
      }

      for (const clicked of isClicked.value) {
        if (!clicked) {
          allClicked = false;
          break;
        }
      }

      if (allClicked && !winner.value) {
        pair.value = "pareggio";
      }
    };

    const reset = () => {
      icons.value = Array(9).fill(null);
      isClicked.value = Array(9).fill(false);
      countClick.value = 0;
      winner.value = null;
      pair.value = null;
    };

    const getIcon = (id) => {
      const input = gridIds.indexOf(id);
      return input !== -1 ? icons.value[input] : "";
    };

    const gridIds = ["N1", "N2", "N3", "N4", "N5", "N6", "N7", "N8", "N9"];

    return {
      icons,
      click,
      getIcon,
      gridIds,
      winner,
      pair,
      reset,
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(0, 0, 0);
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

.winnerText {
  margin-top: 5px;
  text-align: center;
  text-decoration: underline;
}

.buttonWinner {
  padding: 8px;
  border: 1px solid black;
  border-radius: 15%;
  background-color: rgb(255, 255, 255);
  cursor: pointer;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  background-color: rgba(2, 2, 2, 0.24);
  border: 2px solid black;
}

.buttonDiv {
  display: flex;
  justify-content: space-evenly;
}
</style>

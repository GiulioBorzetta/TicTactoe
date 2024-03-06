<template>
  <div>
    <titolo-component :firstPlayer="firstPlayer" @update:firstPlayer="updateFirstPlayer" :secondPlayer="secondPlayer" @update:secondPlayer="updateSecondPlayer" />
    <turno-component :countClick="countClick" :player="player" :firstPlayer="firstPlayer" />
    <tabellone-component :gridIds="gridIds" :click="click" :getIcon="getIcon" />
    <vincitore-component :winner="winner" :pair="pair" :reset="reset" />
  </div>
</template>

<script>
import { ref } from "vue";
import O from "./components/icons/iconO.png";
import X from "./components/icons/iconX.png";
import TitoloComponent from './components/TitoloComponent.vue';
import TurnoComponent from './components/TurnoComponent.vue';
import TabelloneComponent from './components/TabelloneComponent.vue';
import VincitoreComponent from './components/VincitoreComponent.vue';

export default {
  components: {
    TitoloComponent,
    TurnoComponent,
    TabelloneComponent,
    VincitoreComponent
  },
  setup() {
    const icons = ref(Array(9).fill(null));
    const isClicked = ref(Array(9).fill(false));
    const countClick = ref(0);
    const firstPlayer = ref('');
    const secondPlayer = ref('');
    const winner = ref(null);
    const pair = ref(null);
    const player = ref(firstPlayer.value);
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

    const updateFirstPlayer = (value) => {
      firstPlayer.value = value;
    };
    
    const updateSecondPlayer = (value) => {
      secondPlayer.value = value;
    };

    const click = (id) => {
      const input = gridIds.indexOf(id);
      if (input !== -1 && !winner.value && !isClicked.value[input]) {
        icons.value[input] = countClick.value % 2 === 0 ? X : O;
        if(icons.value[input] === O){
          player.value = firstPlayer.value;
        }else{
          player.value = secondPlayer.value;
        }   
        countClick.value++;
        isClicked.value[input] = true;
        checkWinner();
      }
    };

    const checkPlayer = () => {
      if (firstPlayer.value === '') {
        firstPlayer.value = 'player1';
      }
      if (secondPlayer.value === '') {
        secondPlayer.value = 'player2';
      }
    };

    const checkWinner = () => {
      let allClicked = true;
      checkPlayer();

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
      player.value = firstPlayer;
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
      firstPlayer,
      secondPlayer,
      checkPlayer,
      player,
      countClick,
      updateFirstPlayer,
      updateSecondPlayer
    };
  },
};
</script>

<template>
    <div v-if="winner">
      <h3 class="winnerText">{{ winner }} ha vinto la partita!!</h3>
      <div class="buttonDiv">
        <h3>Vuoi ricominciare la partita?</h3>
        <h3>=></h3>
        <button class="buttonWinner" @click="reset">RESET</button>
      </div>
    </div>
    <div v-else-if="pair">
      <h3 class="winnerText">PAREGGIO!</h3>
      <div class="buttonDiv">
        <h3>Vuoi ricominciare la partita?</h3>
        <h3>=></h3>
        <button class="buttonWinner" @click="reset">RESET</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['winner', 'pair', 'reset']
  };
  </script>
  
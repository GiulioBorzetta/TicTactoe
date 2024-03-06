<template>
    <div class="mb">
      <div class="text-center">
        <h3>Turno:</h3>
        <h3 class="ml">{{ countClick }} </h3>
      </div>
      <div class="text-center">
        <h3>è il turno di:</h3>
        <h3 :class="[player === firstPlayer ? 'colorPlayer1' : 'colorPlayer2', 'ml']">{{ player }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['countClick', 'player', 'firstPlayer']
  };
  </script>
  
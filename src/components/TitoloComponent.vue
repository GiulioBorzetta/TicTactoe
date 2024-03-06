<template>
  <div class="title">
    <h1>TIC TAC TOE!</h1>
    <div>
      <form>
        <input class="inputPlayer colorPlayer1" placeholder="name player 1" id="player1" type="text" :value="firstPlayer" @input="$emit('update:firstPlayer', $event.target.value)"/>
        <input class="inputPlayer colorPlayer2" placeholder="name player 2" id="player2" type="text" :value="secondPlayer" @input="$emit('update:secondPlayer', $event.target.value)"/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['firstPlayer', 'secondPlayer']
};
</script>

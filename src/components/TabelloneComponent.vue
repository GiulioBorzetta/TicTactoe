<template>
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
  </template>
  
  <script>
  export default {
    props: ['gridIds', 'click', 'getIcon']
  };
  </script>
  
<template>
  <div class="header-container">
    <img src="../assets/img/logo/shortlink_logo.png"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    msg: String,
  },
});
</script>

<style scoped>

.header-container{
  position: relative;
  text-align: left;
  width: 100%;
  height: 100px;
  background-color: white;
  background-color: rgba(0, 0, 0, 0.8);
}

.header-container img{
  width: 200px;
  height: auto;
  margin-left: 20px;
  margin-top: 20px;
}

@media (max-width: 800px){
  .header-container{
    text-align: center;
  }
}

</style>

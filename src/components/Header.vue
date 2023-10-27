<template>
  <div class="header-container">

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
  position: absolute;
  top: 0;
  width: 100%;
  height: 120px;
  border-bottom: 1px solid #eaeaea;
}

.header-text{
  color: lightgrey;
}

</style>

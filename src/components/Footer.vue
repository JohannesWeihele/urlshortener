<template>
  <div class="footer-container">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  props: {
    msg: String,
  },
});
</script>

<style scoped>

.footer-container{
  position: absolute;
  bottom: 0;
  color: lightgrey;
  width: 100%;
  height: 120px;
  border-top: 1px solid #eaeaea;
  background-image: url("../assets/img/background/footer-img.png");
  background-size: cover;
}

</style>

<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <p>© 2023 ShortLink. All rights reserved</p>
    </div>
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
  position: relative;
  width: 100%;
  height: 100%;
}

.footer-wrapper{
  width: 100%;
  height: 200px;
  background-color: rgba(15, 15, 15, 0.8);
  border-top: 1px solid #7c7c7c;
}

.footer-wrapper p{
  margin-top: 90px;
  color: white;
}

</style>

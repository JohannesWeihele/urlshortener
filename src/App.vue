<template>
  <div class="content-container">
    <Header/>
    <URLShortener/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import URLShortener from './components/URLShortener.vue';
import Footer from './components/Footer.vue';

import {URLService} from "@/services/url.service";

let url_service = new URLService();

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    URLShortener
  },
  data(){
    return{

    }
  },
  async beforeRouteEnter(to, from, next) {
    const routeParamUrl = to.params.url as string;
    let decoded_url = 'https://';
    console.log(routeParamUrl);

    if (routeParamUrl != undefined) {
      try {
        const url = await url_service.getDecodedURL(routeParamUrl)
        console.log(url);
        decoded_url += url;
        window.location.href = decoded_url;
      } catch (error) {
        console.error(error);
      }
    } else {
      next();
    }
  }
});
</script>

<style>

body {
  height: 100%;
  width: 100%;
  margin: 0;
  text-align: center;
  font-family: "Segoe UI";
  overflow-x: hidden;
  overflow-y: auto;
}

@font-face {
  font-family: "Segoe UI";
  src: url("assets/fonts/SegoeUI.otf") format("opentype")
}

</style>

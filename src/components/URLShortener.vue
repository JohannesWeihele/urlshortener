<template>
  <div class="shortener-container">
    <img class="logo" src="../assets/img/logo/urlshortener_logo.png" alt="shortener_logo"/>
    <form @submit.prevent="generate_url()" class="forms-container">
      <div>
        <input class="long-url-input" type="text" required="required" name="url_input" v-model="url_input" placeholder="Enter long URL"/>
      </div>
      <div>
        <input class="generate-button" type="submit" value="Generate"/>
      </div>
      <div>
        <div class="generate-output">
          <div>
            <img class="generate-arrow" src="../assets/img/arrow/generate_arrow.png"/>
          </div>
          <div class="output-wrapper">
            <div>
              <label for="short-url-output">Shortener-URL:</label>
            </div>
            <div>
              <input class="short-url-output" id="short-url-output" v-model="url_output" type="text" placeholder="Output"/>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import {URLService} from "@/services/url.service";

let url_service = new URLService();

export default {
  name: 'URLShortener',
  data(){
    return {
      url_input: '',
      url_output: '',
    }
  },
  methods:{
    async generate_url(){

      let encoded_url = '';

      if(this.url_input.includes('https://')){
        encoded_url = this.url_input.substring(8);
      } else {
        encoded_url = this.url_input;
      }

      this.url_output = await url_service.getEncodedURL(encoded_url);
      console.log(this.url_output);
    }
  }
}
</script>

<style scoped>

.shortener-container{
  width: 100%;
  margin-top: 50px;
}

.logo{
  width: 500px;
  height: auto;
  margin-left: -40px;
  margin-bottom: -150px;
}

.forms-container{
  display: inline;
}

.long-url-input, .short-url-output{
  width: 20vw;
  height: 40px;
  min-width: 150px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding-left: 20px;
  margin-bottom: 30px;
  color: #656565;
}

.short-url-output{
  margin-top: 10px;
}

label {
  color: #cccccc;
  font-size: 14px;
  font-weight: lighter;
}

.output-wrapper{
  display: block;
}

.generate-output{
  display: inline;
}

.generate-arrow{
  margin-bottom: 30px;
  animation-name: flying;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.generate-button{
  width: 10vw;
  height: 40px;
  max-width: 150px;
  min-width: 100px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-family: "Segoe UI";
  margin-bottom: 30px;
  color: #545454;
  font-weight: lighter;
  background-color: #ffbf00;
  box-shadow: 5px 5px 10px #c4c4c4;
}

.generate-button:hover{
  cursor: pointer;
  background-color: #ffda6d;
}

@keyframes flying {
  0% {translate: 0px 0px}
  50% { translate: 0px 20px}
  100% { translate: 0px 0px}
}

</style>

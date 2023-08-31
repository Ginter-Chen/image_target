<template>
  <div class="back">
    <div class="title">Image Target Detector</div>
    <button class="InputButton" id="InputButton" @click="inputClick">Upload Image</button>
    <input type="file" class="InputImage" id="InputImage" accept="image/png, image/jpeg" @change="loadImage()">
    <div class="ImageBuffer">
      <img class="before" id="before" @load="OnLoadImage()"/>
      <canvas class="after" id="after"></canvas>
    </div>
  </div>
</template>

<script>
import jsFunction from "./ImageTarget.js";
export default {
  name: 'imagetarget',
  props: {
    
  },
  methods:{
    inputClick(){
      document.getElementById("InputImage").click();
    },
    loadImage(){
      jsFunction.upLoad();
    },
    OnLoadImage(){
      jsFunction.ImageOnLoad();
    }
  },
}
</script>
<style scoped lang="scss">
@import "./ImageTarget.scss";
</style>

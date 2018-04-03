<template>
  <div class="home">
    <!-- <img src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="container is-fullhd">
      <h1 class="title"> Ingresa tu repetida </h1>
      <div class="field">
        <div class="control" style="width: 25%;margin: 10px auto;">
          <input class="input is-large is-primary" type="text" placeholder="123" maxlength="3"
                 v-on:keypress.13="sendSticker($event);" style="text-align: center;">
        </div>
      </div>
      <div>-----------------------------------------------------------------------------</div>

      <div class="rep-container">
        <div class="rep-item">
          <div class="rep-number"> 123 </div>
          <div class="rep-count">2</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  methods: {
    sendSticker(e) {
      console.log('add', e.target.value);
      e.target.value = '';
    },
  },
};
</script>
<style lang="stylus">

.rep-container
  .rep-item
    width 150px
    height 150px
    border 1px solid black
    border-radius 50%
    margin 0 auto
    position relative
    .rep-number
      width 75px
      height 75px
      border 1px solid black
      border-radius 50%
      background rgba(160, 160, 160, 0.47)
      margin 36.5px auto
      font-size 26px
      line-height 2.85
    .rep-count
      position: absolute;
      bottom: 21%;
      right: 25%;
      background-color: #f16060;
      width: 25px;
      text-align: center;
      height: 25px;
      border-radius: 50%;
      color: white;
      line-height: 26px;

</style>


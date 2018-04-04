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
        <div class="rep-item" v-for="(sticker, key) in stickers" v-bind:key="key">

          <div class="rep-group">
            <h1 class="title" v-if="key == 0"> {{sticker.category }}  </h1>
            <h1 class="title" v-if="key == 8"> {{sticker.category}} </h1>
            <h1 class="title" v-if="key == 660"> {{sticker.category}} </h1>
            <h1 class="title" v-if="key % 20 === 0 && key !== 660"> {{sticker.group}} </h1>
          </div>

          <div class="rep-det">
            <div class="rep-number">
              <span>{{key}}</span>
              <div class="rep-count" v-if="sticker.count > 1"> + {{sticker.count - 1}} extra </div>
            </div>

            <div class="rep-det--buttons">
              <a class="button is-large is-info is-outlined" v-on:click="downcount(sticker)"> - </a>
              <a class="button is-large is-info is-outlined" v-on:click="upCount(sticker)"> + </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { stickers } from '../stickers.json';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      stickers: null,
    };
  },
  methods: {
    sendSticker(e) {
      console.log('add', e.target.value);
      e.target.value = '';
    },
    upCount(sticker) {
      // eslint-disable-next-line
      sticker.count += 1;
    },
    downcount(sticker) {
      // eslint-disable-next-line
      if (sticker.count > 1) sticker.count -= 1;
    },
  },
  mounted() {
    this.stickers = stickers;
    console.log(stickers);
  },
};
</script>
<style lang="stylus">

.rep-container
  .rep-item
    width 100%
    height 150px
    border 1px solid black
    margin 10px auto
    text-align initial

    // position relative
    .rep-group
      display block
      height 40px
    .rep-det
      display flex
      justify-content space-around
      .rep-number
        width 70%
        height 75px
        border 1px solid black
        background rgba(160, 160, 160, 0.47)
        // margin 36.5px auto
        font-size 26px
        line-height 2.85
        display flex
        justify-content flex-start
        span
          font-weight bold
          margin 0 20px
        .rep-count
          // position: absolute;
          background-color #f16060

      &--buttons
        display flex
        width 15%
        justify-content space-around
        .button
          width 60px
          height 45px


</style>


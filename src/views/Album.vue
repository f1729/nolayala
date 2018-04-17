<template>
  <div class="album">
    <div class="album-head">
      <a href="#" class="head-left">Mi Perfil</a>
      <a href="#" class="head-right">Mensajes (5)</a>
      <h1 class="title">Album</h1>
    </div>
    <div class="album-search">
      <input type="text" name="" placeholder="Buscar">
    </div>
    <div class="album-body">
      <div class="album-body-detail" v-for="(sticker, key) in stickers" v-bind:key="key">
        <template v-if="key == 0">
          <div class="album-category">
            <p>{{sticker.category }}</p>
          </div>
        </template>
        <template v-if="key == 8">
          <div class="album-category">
            <p>{{sticker.category }}</p>
          </div>
        </template>
        <template v-if="key == 660">
          <div class="album-category">
            <p>{{sticker.category}} </p>
          </div>
        </template>
        <template v-if="key % 20 === 0 && key !== 660">
          <div class="album-category">
            <p>{{sticker.group}}</p>
          </div>
        </template>
        <div class="album-numbers">
          <div class="numbers">
            <div class="num">{{key}}</div>
            <div class="status-null" v-bind:class="[sticker.count > 0 ? 'statusYala' : '' ]"></div>
            <div class="repeats">
              <span v-if="sticker.count > 1">+ {{sticker.count - 1}} extra</span>
              <span v-else> &nbsp;</span>
            </div>
            <div class="addorless">
              <button class="less" v-on:click="downcount(sticker)"><span>-</span></button>
              <button class="add" v-on:click="upCount(sticker)"><span>+</span></button>
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
      if (sticker.count >= 1) sticker.count -= 1;
    },
  },
  mounted() {
    this.stickers = stickers;
    console.log(stickers);
  },
};
</script>
<style lang="stylus">
  .album
    width 360px
    background-color #F9F9F9
    margin 20px auto
    &-head
      padding 20px
      h1
        text-transform uppercase
        color #333
        font-size 16px
        font-weight bold
      .head-left
        float left
      .head-right
        float right
      .head-left, .head-right
        font-size 14px
    &-search
      margin 0 20px 15px
      background-color #E8E8EA
      border-radius 10px
      input
        background-color transparent!important
        border none
        width 94%
        padding 4% 3%
        font-size 16px
    &-body
      padding 20px
      background-color #FFF
      &-detail
        text-align left
        .album-category
          font-size 16px
          font-weight bold
          text-transform uppercase
          background-color #F3F3F3
          margin 5px -20px
          padding 5px 20px
        .album-numbers
          padding 10px 0
          border-bottom 1px solid #CCC
          min-height 50px
          .num, .status, .status-null, .repeats, .addorless
            float left
          .num
            width 50px
          .status, .status-null
            width 20px
            height 25px
            border-radius 2px
            margin-right 10px
          .status-null
            background-color #CCC
          .statusYala
            background-color #157EFB
          .repeats
            width 100px
            font-size 11px
            line-height 26px
          .addorless
            width 100
            button:first-child
              border 1px solid #157EFB
              border-top-left-radius 5px
              border-bottom-left-radius 5px
              font-size 20px
              width 50px
              color #157EFB
            button:last-child
              border 1px solid #157EFB
              border-top-right-radius 5px
              border-bottom-right-radius 5px
              font-size 20px
              width 50px
              color #157EFB
</style>

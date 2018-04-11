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
      <div class="album-body-detail">
        <div class="album-category">
          <p>Fifa</p>
        </div>
        <div class="album-numbers">
          <div class="numbers">
            <div class="num">000</div>
            <div class="status">-</div>
            <div class="repeats">+2 extra</div>
            <div class="addorless">
              <button class="less"><span>-</span></button>
              <button class="add"><span>+</span></button>
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
          .num, .status, .repeats, .addorless
            float left
          .num
            width 50px
          .status
            width 25px
            background-color #157EFB
            border-radius 30px
            margin-right 10px
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

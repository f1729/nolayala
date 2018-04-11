<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.png" class="">
    </div>
    <div class="form-login">
      <form>
        <div class="wrap-input">
          <input type="" name="" placeholder="Email" />
        </div>
        <div class="wrap-input">
          <input type="" name="" placeholder="Contraseña" />
        </div>
        <div class="wrap-button">
          <button class="btn-login" type="button">Ingresa con Facebook</button>
        </div>
      </form>
    </div>
  </div>
</template>
<style lang="stylus">
  body
    padding 0
    margin 0
  .login
    background #1458A4
    width 360px
    display block
    margin 100px auto 0 auto
    padding 0 0 40px 0
    .logo
      img
        width 60%
        margin-top 50px
    .form-login
      width 100%
      display block
      margin 50px auto 0px auto
      display block
    .wrap-button
      padding-top 50px
    .wrap-input,
    .wrap-button
      width 270px
      margin 0 auto 10px auto
      input
        text-align left!important
        border 1px solid white
        padding 10px 20px
        font-size 16px
        display block
        width 100%
        background #E8E8EA
        line-height 30px
        text-align center
      button.btn-login
        padding 10px 20px
        background #157EFB
        text-transform uppercase
        font-size 16px
        border none
        display block
        width 100%
        color white
        box-shadow 0 5px 0px #104A89
        line-height 30px
</style>

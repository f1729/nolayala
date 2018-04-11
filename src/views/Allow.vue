<template>
    <div class="login">
        <div class="form-login">
            <form>
                <h1>Hola <span>jhonnybravo56</span></h1>
                <h3>Una última pregunta ...<br>
                ¿Deseas intercambiar repetidas?</h3>
                <div>
                  <h3 class="allowed-intercambiar">Intercambiar repetidas </h3>
                  <input type="checkbox" name="">
                </div>
                <p>Usamos esta informacion para encontrar las repetidas más cercanas a tí.</p>
                <div class="wrap-input">
                    <input type="" name="" placeholder="Pais" />
                </div>
                <div class="wrap-input">
                    <input type="" name="" placeholder="Ciudad" />
                </div>
                <div class="wrap-input">
                    <input type="" name="" placeholder="Distrito o código postal" />
                </div>
                <div class="wrap-button">
                    <button class="btn-login" type="button">Listo</button>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="stylus">
h1, h2, h3, h4, h5, p
  color white
  font-weight normal
h1
  font-size 22px
  padding-top 50px
  padding-bottom 20px
span
  font-weight bold
h3
  font-size 18px
.allowed-intercambiar
  padding 20px 0
  font-weight bold
.login
  background #1458A4
  width 360px
  height 100%
  display block
  margin 100px auto
.logo
  img
    width 60%
    margin-top 50px
.form-login
  width 100%
  display block
  margin 50px auto
  p
    font-size 12px
    padding 5px 40px 10px 40px
    line-height 12px
  .wrap-input,
  .wrap-button
    width 270px
    margin 0 auto 10px auto
  input,
    text-align center
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
    text-align center
  .wrap-button
    padding-top 50px
</style>

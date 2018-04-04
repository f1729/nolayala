
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="row">
      <template v-for="(figura, key) in repetidas">
        <div :key="key" class="columnas">
          <div>{{figura.num}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Repetidas',
    };
  },
};
</script>

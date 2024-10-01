<template>
  <section>
    <the-header></the-header>
    <products></products>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import Products from './components/products/products.vue';

export default {
  components:{
    Products,
    TheHeader
  },
}
</script>

<style scoped>
*{
  margin: 0;
}
</style>
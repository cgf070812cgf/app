<template>
  <div>
    <HeaderVue />
    <router-view></router-view>
    <FooterVue v-show="$route.meta.show" />
  </div>
</template>

<script>
import HeaderVue from './components/Header'
import FooterVue from './components/Footer'
export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue,
  },
  mounted() {
    this.$store.dispatch('getCategoryList')
  },
}
</script>

<style>
</style>
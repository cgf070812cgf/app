<template>
  <div>
    <HeaderVue />
    <router-view></router-view>
    <FooterVue v-show="$route.meta.show"></FooterVue>
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
  methods: {},
}
</script>

<style>
</style>
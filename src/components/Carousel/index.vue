<template>
  <div class="swiper-container" ref="Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'CarouselVue',
  props: ['list'],
  watch: {
    list: {
      // 立即监听
      // ListContainer是在mounted中发请求，轮播是图动态渲染的，不可以在mounted中new Swiper
      // Floor的数据是从Home父组件中传递过来的，已经渲染完成了，可以在mounted中new Swiper
      // floor从来都没有变化，数据是父亲给的
      immediate: true,
      handler() {
        // 只能监听到数据已经有了，但是无法确定v-for有没有渲染完成，因此还是要使用nextTick
        this.$nextTick(() => {
          new Swiper(this.$refs.Swiper, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
    },
  },
}
</script>

<style scoped>
</style>  
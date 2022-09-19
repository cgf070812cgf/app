<template>
  <div>
    <!-- 使用三级联动组件，已经被注册为全局组件 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <RankVue />
    <LikeVue />
    <FloorVue v-for="floor in floorList" :key="floor.id" :floor="floor" />
    <BrandVue />
  </div>
</template>

<script>
// 引入其他组件
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import RankVue from './Rank'
import LikeVue from './Like'
import FloorVue from './Floor'
import BrandVue from './Brand'

import { mapState } from 'vuex'

export default {
  name: 'HomeVue',
  components: {
    ListContainer,
    TodayRecommend,
    RankVue,
    LikeVue,
    FloorVue,
    BrandVue,
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({ floorList: (state) => state.home.floorList }),
  },
}
</script>

<style scoped>
</style>  
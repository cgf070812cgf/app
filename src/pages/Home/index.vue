<template>
  <div>
    <!-- 使用三级联动组件，已经被注册为全局组件 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <RankVue />
    <LikeVue />
    <FloorVue />
    <FloorVue />
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

export default {
  name: 'indexHome',
  components: {
    ListContainer,
    TodayRecommend,
    RankVue,
    LikeVue,
    FloorVue,
    BrandVue,
  },
}
</script>

<style scoped>
</style>  
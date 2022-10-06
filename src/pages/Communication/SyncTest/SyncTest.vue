<template>
  <div>
    小明的爸爸现在有{{ money }}元
    <h2>不使用sync修改符</h2>
    <Child1 :money="money" @update:money="money = $event"></Child1>
    <h2>使用sync修改符</h2>
    <!-- 
      money.sync
      1.父组件传递props给子组件
      2.给子组件绑定了一个自定义事件@update:money
    -->
    <Child2 :money.sync="money"></Child2>
    <hr />
  </div>
</template>

<script type="text/ecmascript-6">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
export default {
  name: 'SyncTest',
  data() {
    return {
      money: 10000,
    }
  },
  components: {
    Child1,
    Child2,
  },
}
</script>

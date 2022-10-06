<template>
  <div>
    <!-- 利用a标签实现提示 -->
    <a :title="title">
      <!-- v-bind和v-on不能缩写 -->
      <el-button v-bind="$attrs" v-on="$listeners">添加</el-button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'TestVue',
  props: ['title'],
  mounted() {
    //this.$attrs:可以获取到父亲传递的数据【props】
    //this.$attrs是可以获取父亲传递的props数据，如果子组件通过
    //props:[],接受，this.$attrs属性是获取不到的
    console.log(this.$attrs)
    // $listeners可以获取父组件传递给子组件的自定义事件
    console.log(this.$listeners)
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生DOM事件 -->
    <button @click="handler">原生btn按钮</button>
    <!-- 使用Event1组件：底下这个组件，绑定的click不是原生的DOM事件 =，是自定义事件，要用$emit触发 -->
    <!-- @click.native 原生DOM事件，利用事件的委派 -->
    <Event1 @click.native="handler1"></Event1>
    <hr />
    <!-- 自定义事件对于原生DOM没有任何意义 -->
    <!-- <button @erha="handler3"> 原生的btn</button> -->
    <Event2 @click="handler2" @xxx="handler2"></Event2>
    <!-- 表单元素 color:选取颜色  range：范围条 date：日历 week-->
    <input type="week" />
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

export default {
  name: 'EventTest',

  components: {
    Event1,
    Event2,
  },

  methods: {
    //原生DOM事件的回调
    handler(event) {
      console.log('原始DOM的回调', event)
    },
    handler1() {
      console.log('Event1组件的回调')
    },
    handler2(params) {
      console.log('Event2组件的回调', params)
    },
  },
}
</script>

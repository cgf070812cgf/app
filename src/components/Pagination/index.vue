<template>
  <div class="pagination">
    <button :disabled="pageNo===1" @click="sendPage(pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1" @click="sendPage(1)" :class="{active:pageNo===1}">1</button>
    <button v-if="startNumAndEndNum.start>2">···</button>

    <!-- 中间部分 -->
    <template v-for="(page,index) in startNumAndEndNum.end">
      <button :key="index" v-if="page>=startNumAndEndNum.start" @click="sendPage(page)" :class="{active:pageNo===page}">{{page}} </button>
    </template>

    <button v-if="startNumAndEndNum.end<(totalPages-1)">···</button>
    <button v-if="startNumAndEndNum.end<totalPages" @click="sendPage(totalPages)" :class="{active:pageNo===totalPages}">{{totalPages}}</button>
    <button :disabled="pageNo===totalPages" @click="sendPage(pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationVue',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  methods: {
    sendPage(page) {
      this.$emit('getPageNo', page)
    },
  },
  computed: {
    // 共多少页
    totalPages() {
      // ceil向上取整
      return Math.ceil(this.total / this.pageSize)
    },
    // 计算连续页码的起始和结束的数字
    startNumAndEndNum() {
      let start = 0,
        end = 0
      // 连续页码至少为5页，若有不正常的现象（总页码少于5页）
      if (this.continues > this.totalPages) {
        start = 1
        end = this.totalPages
      } else {
        // 正常现象
        start = this.pageNo - Math.floor(this.continues / 2)
        end = this.pageNo + Math.floor(this.continues / 2)
        if (start < 1) {
          start = 1
          end = this.continues
        }
        if (end > this.totalPages) {
          start = this.totalPages - this.continues + 1
          end = this.totalPages
        }
      }
      return { start, end }
    },
  },
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style> 
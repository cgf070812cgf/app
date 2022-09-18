<template>
  <div class="type-nav">
    <div class="container">
      <!-- 事件委派｜事件代理 -->
      <div @mouseleave="leaveList">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <div class="sort">
          <!-- 利用事件的委派和编程式导航实现路由跳转和参数传递 -->
          <div class="all-sort-list2" @click="goSearch($event)">
            <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId">
              <!-- 一级分类 -->
              <h3 @mouseenter="changeIndex(index)" :class="{cur:listIndex===index}">
                <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
              </h3>
              <!-- 二级分类 -->
              <div class="item-list clearfix" :style="{display:listIndex===index?'block':'none'}">
                <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                    </dt>
                    <!-- 三级分类 -->
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// 按需引入
import throttle from 'lodash/throttle'

export default {
  name: 'TypeNav',
  data() {
    return {
      listIndex: -1,
    }
  },
  methods: {
    // 进行节流
    changeIndex: throttle(function (index) {
      this.listIndex = index
    }, 50),
    // 鼠标离开后处理
    leaveList() {
      this.listIndex = -1
    },

    // 进行路由跳转的方法
    goSearch(event) {
      // 将a标签加上自定义属性categoryName，其余标签是没有的
      let element = event.target
      // dataset可获取标签的自定义属性和属性值
      let { categoryname, category1id, category2id, category3id } =
        element.dataset
      // 标签上有categoryname一定是a标签
      if (categoryname) {
        let toLoaction = { name: 'search' }
        let query = { categoryName: categoryname }
        // 判断a标签是一级，二级还是三级
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        toLoaction.query = query
        this.$router.push(toLoaction)
      }
    },
  },

  mounted() {
    // 当组件挂载完毕，发送请求获取数据，存储到仓库
    this.$store.dispatch('categoryList')
  },

  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList
      },
    }),
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
            &.cur {
              background-color: skyblue;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
      }
    }
  }
}
</style> 
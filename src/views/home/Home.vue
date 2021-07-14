<template>
  <div id="home">
    <!-- 头部 -->
    <nav-bar class="home-nav-bar">
      <div slot="center">首页</div>
    </nav-bar>

    <!-- '流行','新款','精选' 选项 -->
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" v-show="isShowTabControl2"
      class="tab-control2" />

    <!-- Scroll 包裹内容滚动 -->
    <scroll ref="scroll" class="scroll-content" :probe-type="3" :pull-up-load="true" @scroll="scroll"
      @upLoad="loadMore">

      <!-- 轮播图 -->
      <!-- <home-swiper :banners="banners" class="home-swiper" @imgLoad="imgLoad"/> -->

      <!-- 优惠组件 -->
      <!-- <recommentd-view :recommends="recommends"/> -->

      <!-- 本周流行 -->
      <!-- <popular-view /> -->

      <!-- '流行','新款','精选' 选项 -->
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" />

      <!-- 首页商品展示 -->
      <goods-list :show-goods="showGoods" />

    </scroll>

    <!-- 返回顶部 -->
    <back-top @click.native="clickTop" v-show="backTopShow" />

  </div>

</template>

<script>
  //头部组件
  import NavBar from 'components/common/navbar/NavBar.vue'
  //首页轮播组件
  import HomeSwiper from './childCompts/HomeSwiper.vue'
  //优惠组件
  import RecommentdView from './childCompts/RecommendView.vue'
  //本周流行组件
  import PopularView from './childCompts/PopularView.vue'
  //'流行','新款','精选' 选项组件
  import TabControl from 'components/content/tabControl/TabControl.vue'
  //首页商品组件
  import GoodsList from 'components/content/goods/GoodsList.vue'


  //页面滚动 scroll组件
  import Scroll from 'components/common/scroll/Scroll.vue'

  //返回顶部组件
  import BackTop from 'components/content/backTop/BackTop.vue'

  //工具方法
  import {
    debounce
  } from 'common/utils.js'

  //请求数据
  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'


  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          }
        },
        type: 'pop',
        backTopShow: false,
        isShowTabControl2: false,
        localtion1: 0,
        localtion2: 0,
        localtion3: 0
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      Scroll,
      BackTop,
      RecommentdView,
      PopularView,
      TabControl,
      GoodsList
    },
    computed: {
      showGoods() {
        return this.goods[this.type].list
      }
    },
    created() {
      //数据初始化
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
    },
    mounted() {
      //使用防抖函数 刷新better-scroll 解决因图片没有加载完better-scroll获取的高度错误
      //造成页面无法滚动问题
      const refresh = debounce(this.$refs.scroll.refresh, 5)
      this.$bus.$on('itemImageLoad', () => {
        refresh()
      })


    },
    methods: {
      //返回顶部
      clickTop() {
        this.$refs.scroll.scrollTo(0, 0)
      },

      //监听页面滚动位置 当页面滚动向下滚动300时回到顶部按钮显示
      scroll(p) {
        this.backTopShow = -p.y >= 300

        //通过获取tabControl组件的高度 监听滚动位置 以此判断 tabControl2组件是否显示 从而实现吸顶效果
        this.isShowTabControl2 = -p.y > this.$refs.tabControl1.$el.offsetTop

      },

      //上拉底部加载数据
      loadMore() {
        this.getHomeGoods(this.type)
      },

      //监听用户点击的选项（流行 | 新款 | 精选）
      tabClick(index) {

        //记录用户浏览离开时每个选项的位置，实现再次进入时还在原来位置的效果
        switch (this.type) {
          case 'pop':
            this.localtion1 = this.$refs.scroll.scrollY()
            break
          case 'sell':
            this.localtion2 = this.$refs.scroll.scrollY()
            break
          case 'new':
            this.localtion3 = this.$refs.scroll.scrollY()
            break
        }

        switch (index) {
          case 0:
            this.type = 'pop'
            this.$refs.scroll.scrollTo(0, this.localtion1, 0)
            break
          case 1:
            this.$refs.scroll.scrollTo(0, this.localtion2, 0)
            this.type = 'sell'
            break
          case 2:
            this.$refs.scroll.scrollTo(0, this.localtion3, 0)
            this.type = 'new'
            break
        }

        //实现吸顶效果时使用了两个tabControl组件 为了解决两个组件选项保持同步 动态的给clickNum赋值
        this.$refs.tabControl1.clickNum = index
        this.$refs.tabControl2.clickNum = index
      },

      imgLoad() {
        //轮播图加载完成刷新better-scroll
        this.$refs.scroll.refresh()
      },

      //网络请求数据
      //首页轮播等数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list

        }).catch(err => {
          console.log(err);
        })
      },

      //首页商品数据
      getHomeGoods(type) {
        const page = ++this.goods[type].page

        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)

          //解决 better-scroll 上拉加载事件只会执行一次问题
          this.$refs.scroll.finishPullUp()
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
</script>

<style>
  #home {
    height: 100vh;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .scroll-content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .tab-control2 {
    position: fixed;
    top: 44px;
    background-color: #fff;
    z-index: 7;
  }
</style>

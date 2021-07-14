<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: {
        type: String,
        default: ''
      },
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {
          color: this.activeColor
        } : {}
      }
    },
    methods: {
      tabBarClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex:1;
    text-align: center;
    font-size: 14px;
    align-self: center;
  }
  .tab-bar-item img{
    width: 24px;
  }
</style>

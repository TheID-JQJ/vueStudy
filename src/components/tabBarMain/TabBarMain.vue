<template>
  <div>
    <router-view />
    <tab-bar>
      <tab-bar-item link="/home">
        <img src="~@/assets/image/home.png" slot="item-icon" />
        <img src="~@/assets/image/home-active.png" slot="item-icon-active" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/find">
        <img src="~@/assets/image/find.png" slot="item-icon" />
        <img src="~@/assets/image/find-active.png" slot="item-icon-active" />
        <div slot="item-text">发现</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img src="~@/assets/image/shopcart.png" slot="item-icon" />
        <img
          src="~@/assets/image/shopcart-active.png"
          slot="item-icon-active"
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img src="~@/assets/image/profile.png" slot="item-icon" />
        <img src="~@/assets/image/profile-active.png" slot="item-icon-active" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar/TabBar.vue";
import TabBarItem from "@/components/tabBar/TabBarItem.vue";
export default {
  name: "TabBarMain",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
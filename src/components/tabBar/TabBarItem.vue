<template>
  <div class="tab-bar-item" @click="isClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    link: String,
  },
  computed: {
    isActive() {
      return this.$route.path == this.link;
    },
  },
  methods: {
    isClick() {
      this.$router.push(this.link);
      //   console.log(this.$route);
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  vertical-align: middle;
}

.tab-bar-item .active {
  color: skyblue;
}
</style>
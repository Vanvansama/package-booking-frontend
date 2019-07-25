<template>
  <a-layout id="home">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo"></div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['/package']"
        @click="handleClick"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/package">快递管理</a-menu-item>
        <a-menu-item key="/booking">预约取件</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0"></a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-content></a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleClick(item) {
      this.$router.push(item.key);
    }
  }
};
</script>
<style>
#home .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

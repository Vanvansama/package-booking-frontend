<template>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :defaultSelectedKeys="['1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
        <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-content></a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "home"
};
</script>

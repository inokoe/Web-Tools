<script setup>
import ListItem from "./ListItem.vue";
</script>

<template>
  <div class="container">

    <ListItem>
      <template #heading><router-link to="/ipaddresscheck">🛜 Ipaddresscheck</router-link></template>
      通过API快速检查自己的外网IP地址
    </ListItem>

    <ListItem>
      <template #heading><router-link to="/magenetextract">🪄 Magenetextract</router-link></template>
      提供一页文档并从中批量提取磁力链接地址
    </ListItem>
    <ListItem>
      <template #heading><router-link to="/getlastesttrackerlists">🚀 Getlastesttrackerlists</router-link></template>
      从Github开源的库获取BT下载补充的Tracker列表以提高网络连通率
    </ListItem>
    <ListItem>
      <template #heading><router-link to="/ajaxcorstest">📃 Ajaxcorstest</router-link></template>
      提供一个地址以测试是否允许跨域
    </ListItem>
    <ListItem>
      <template #heading>More .. </template>
      ...
    </ListItem>
  </div>
</template>

<style scoped>
.container {
  height: auto;
  overflow-y: auto;
  padding: 10px;
}

@media (min-width: 1024px) {
  .container {
    max-height: 80vh;
    border-left: 2px solid var(--color-border);
  }
}
</style>

<template>
  <div id="app">
    <router-view/>
    <footer class="ui-footer ui-footer-btn">
      <ul class="ui-tiled ui-border-t">
        <router-link tag="li" :to="{name: 'index'}">市场</router-link>
        <router-link tag="li" :to="{name: 'index'}">发布</router-link>

        <router-link tag="li" :to="{name: 'user'}">个人</router-link>
        <router-link tag="li" :to="{name: 'wallet'}">钱包</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background:#fff;
}
</style>

<template>
  <div id="app">
    <header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i><h1>{{title}}</h1>
    </header>
    <section class="ui-container">
      <router-view>
        
      </router-view>
    </section>
    <footer class="ui-footer ui-footer-btn">
      <ul class="ui-tiled ui-border-t">
        <router-link tag="li" :to="{name: 'patentList'}">市场</router-link>
        <router-link tag="li" :to="{name: 'index'}">发布</router-link>

        <router-link tag="li" :to="{name: 'user'}">个人</router-link>
        <router-link tag="li" :to="{name: 'wallet'}">钱包</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
const titles = {
  market: '市场',
  patentList: '',
  user: '个人中心',
  wallet: '钱包',
  detail: ''
}
export default {
  name: 'App',
  computed: {
    title() {
    console.log(this.$route);
      return titles[this.$route.name]
    }
  }
}
</script>

<style>
body{
  background:#fff;
}
</style>

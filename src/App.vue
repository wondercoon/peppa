<template>
  <div id="app">
    <header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i><h1>{{title}}</h1>
    </header>
    <section class="ui-container">
      <router-view :update="update">
        
      </router-view>
    </section>
    <footer class="ui-footer ui-footer-btn">
      <ul class="ui-tiled ui-border-t" style="font-size: 12px;">
        <router-link tag="li" :to="{name: 'index'}">Market</router-link>
        <router-link tag="li" :to="{name: 'classification'}">Classification</router-link>
        <router-link tag="li" :to="{name: 'myPatents'}">Publish</router-link>
        <router-link tag="li" :to="{name: 'message'}"><span :class="{'ui-reddot': showMsg}">Message</span></router-link>
        <router-link tag="li" :to="{name: 'user'}">Me</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
const titles = {
  market: 'Market',
  patentList: '',
  user: 'Me',
  myPatents: 'My patents',
  detail: ''
}
export default {
  name: 'App',
  data() {
    return {
      showMsg: false
    }
  },
  computed: {
    title() {
    console.log(this.$route);
      return titles[this.$route.name]
    }
  },
  methods: {
    update(v) {
      if (v == 'msg') {
        this.showMsg = true;
      }
      if (v == 'ack') {
        this.showMsg = false;
      }
    }
  }
}
</script>

<style>
body{
  background:#fff;
}
</style>

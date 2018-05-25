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
        <router-link tag="li" :to="{name: 'index'}"><img height="35" src="./assets/market.png"></router-link>
        <router-link tag="li" :to="{name: 'classification'}"><img height="35"src="./assets/class.png"></router-link>
        <router-link tag="li" :to="{name: 'myPatents'}"><img height="35"src="./assets/pub.png"></router-link>
        <router-link tag="li" :to="{name: 'message'}"><span :class="{'ui-reddot': showMsg}"><img height="35"src="./assets/msg.png"></span></router-link>
        <router-link tag="li" :to="{name: 'user'}"><img height="35"src="./assets/me.png"></router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
const titles = {
  market: 'Market',
  patentList: 'Patents',
  user: 'Me',
  myPatents: 'My patents',
  detail: '',
  classification: 'Classification',
  message: 'Message',
  detail: 'View',
  buy: 'Buy',
  chat: 'Chat',
  myOrder: 'My Order'
}
export default {
  name: 'App',
  data() {
    return {
      currentData: null,
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
    update(v, data) {
      if (v == 'msg') {
        this.currentData = data;
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

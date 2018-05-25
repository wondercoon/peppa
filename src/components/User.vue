<template>
  <div>
  
    <ul class="ui-list ui-list-single ui-list-link ui-border-tb">
      <li class="ui-border-t">
        <div class="ui-avatar">
            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
        </div>
        <div class="ui-list-info">
            <h4 class="ui-nowrap">xxx</h4>
            <h5 class="ui-nowrap">xxxx@patsnap.com</h5>
        </div>
      </li>

      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">My Wallet</h4>
              <div class="ui-txt-info">{{ money }}</div>
          </div>
      </li>
      <router-link tag="li" :to="{name: 'myPatents'}" class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">我的专利</h4>
          </div>
      </router-link>
      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">我的关注</h4>
          </div>
      </li>
      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">付费项目</h4>
          </div>
      </li>
      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">发布需求</h4>
          </div>
      </li>
      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">消息</h4>
          </div>
      </li>
      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">反馈</h4>
          </div>
      </li>
      <li class="ui-border-t">
          <div class="ui-list-info">
              <h4 class="ui-nowrap">设置</h4>
          </div>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      money: 0
    }
  },
  created() {
    App.getBalance().then((money) => {
      this.money = money
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

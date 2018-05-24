<template>
  <div>
    <ul class="ui-list ui-list-single ui-list-link ui-border-tb">
      <li class="ui-border-t">
          <div class="ui-avatar">
              <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
          </div>
          <h4 class="ui-nowrap">xxx</h4>
          <h5 class="ui-nowrap">wangmenghuan@patsnap.com</h5>
          
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
import data from '../api/patents.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <div  class="ui-searchbar-wrap ui-border-b">
      <div class="ui-searchbar ui-border-radius">
        <i class="ui-icon-search"></i>
        <div class="ui-searchbar-text">搜索</div>
        <div class="ui-searchbar-input"><input value="" type="text" placeholder="搜索" autocapitalize="off"></div>
        <i class="ui-icon-close"></i>
      </div>
      <button class="ui-searchbar-cancel">取消</button>
    </div>
    <ul class="ui-list ui-list-single ui-list-link ui-border-tb">
      <li class="ui-border-t" v-for="patent in patents">
        <div class="ui-list-info">
          <h4 class="ui-nowrap">{{patent.TITLE}}</h4>
          <div class="ui-txt-info">$1000</div>
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
      patents: data.data.patentData,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

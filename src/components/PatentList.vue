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

    <div class="ui-slider">
      <ul class="ui-slider-content" style="width: 300%; transition-property: transform; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
        <li class="current"><span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span></li>
        <li class=""><span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span></li>
        <li class=""><span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span></li>
      </ul>
      <ul class="ui-slider-indicators"><li class="current">1</li><li class="">2</li><li class="">3</li></ul>
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

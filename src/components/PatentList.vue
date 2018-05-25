<template>
  <div>
    <div  class="ui-searchbar-wrap ui-border-b">
      <div @click="searchMode = !searchMode" class="ui-searchbar ui-border-radius">
        <i class="ui-icon-search"></i>
        <div :style="{display: !searchMode ? 'block' : 'none'}" class="ui-searchbar-text">搜索</div>
        <div @click.stop :style="{display: searchMode ? 'block' : 'none'}" class="ui-searchbar-input">
          <input @keypress.enter="search" v-model="keyword" type="text" placeholder="搜索" autocapitalize="off"></div>
        <i class="ui-icon-close"></i>
      </div>
      <button class="ui-searchbar-cancel">取消</button>
    </div>

    <div class="ui-slider">
      <ul class="ui-slider-content" style="width: 300%; transition-property: transform; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
        <li class="current"><img src="../assets/ad1.png"></li>
        <li class=""><span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span></li>
        <li class=""><span style="background-image:url(http://placeholder.qiniudn.com/640x200)"></span></li>
      </ul>
      <ul class="ui-slider-indicators"><li class="current">1</li><li class="">2</li><li class="">3</li></ul>
    </div>
    <list :items="refinedList" :keyword="hlword" :item-click="gotoDetail"></list>
  </div>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import data from '../api/patents.json'
import List from './List'

export default {
  name: 'HelloWorld',
  components: {List},
  data () {
    return {
      keyword: '',
      hlword: '',
      searchMode: false,
      patents: data.data.patentData,
      refinedList: data.data.patentData,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    search() {
      this.hlword = this.keyword
      this.refinedList = _.filter(this.patents, (patent) => {
        return _.includes(patent.TITLE, this.keyword)
      });
    },
    gotoDetail(item) {
      this.$router.push({
        name: 'detail',
        params: {
          id: item.PATENT_ID
        }
      });
    }
  },
  created() {
    App.loadSellingPatents().then((data) => {
      _.map(data, (st) => {
        var id = _.findIndex(this.patents, {PN: st.pn})
        if (id >= 0) {
          Vue.set(this.patents[id], 'price', st.price)
        }

      });
      this.refinedList = [].concat(_.filter(this.patents, (p) => p.hasOwnProperty('price')))
     });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

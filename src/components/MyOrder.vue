<template>
  <div>
    <order-list :items="[$parent.currentData]" :keyword="hlword"></order-list>
  </div>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import data from '../api/patents.json'
import OrderList from './OrderList'

export default {
  name: 'MyOrder',
  components: {OrderList},
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

  },
  created() {
    _.filter(this.patents, {PATENT_ID: this.$route.params.id});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

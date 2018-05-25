<template>
  <div>
    <my-list :items="refinedList" :keyword="hlword" :item-click="gotoPublish"></my-list>
  </div>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import data from '../api/patents.json'
import MyList from './MyList'

export default {
  name: 'MyPatents',
  components: {MyList},
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

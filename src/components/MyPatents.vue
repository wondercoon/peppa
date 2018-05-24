<template>
  <div>
    <list :items="refinedList" :keyword="hlword"></list>
  </div>
</template>

<script>
import _ from 'lodash'
import data from '../api/patents.json'
import List from './List'

export default {
  name: 'MyPatents',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

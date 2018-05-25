<template>
  <div>
  <img @click="gotoPatents" class="img" src="../assets/detail.png">
    <button @click="buy" class="ui-btn ui-btn-primary">购买</button>
  </div>
</template>

<script>
import _ from 'lodash'
import data from '../api/patents.json'

export default {
  name: 'Detail',
  data () {
    return {
      patents: data.data.patentData,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    patent() {
      return _.find(this.patents, {PATENT_ID: this.$route.params.id});
    }
  },
  methods: {
    buy() {
      this.$router.push({
        name: 'buy',
        id: this.$route.params.id
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  width: 100%;
}
</style>

<template>
  <div>

    {{ patent.PN }}
    {{ patent.TITLE }}
    价格： {{ patent.price }}

    用于交通控制系统的方法和系统提供了用于管理自动化车辆的安排和过程。该交通控制系统可以登记车辆并且然后控制车辆通过一段道路的操作。该自动化控制包括同时在该交通控制系统的引导下确保车辆的正确功能的指导和其他消息的通信。
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

</style>

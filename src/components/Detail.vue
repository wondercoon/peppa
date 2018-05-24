<template>
  <div>
    <div v-if="showAlert" class="ui-dialog show">
        <div class="ui-dialog-cnt">
            <div class="ui-dialog-bd">
                <h3></h3>
                <p>确定要购买？</p>
            </div>
            <div class="ui-dialog-ft">
                <button @click="showAlert = false" type="button" data-role="button">取消</button>
                <button @click="buy" type="button" data-role="button" class="btn-recommand">购买</button>
            </div>
        </div>
    </div>

    {{ patent.PN }}
    {{ patent.TITLE }}
    价格： {{ patent.price }}
    <button @click="showAlert = true" class="ui-btn ui-btn-primary">购买</button>
  </div>
</template>

<script>
import _ from 'lodash'
import data from '../api/patents.json'

export default {
  name: 'Detail',
  data () {
    return {
      showAlert: false,
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
      alert('buy');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

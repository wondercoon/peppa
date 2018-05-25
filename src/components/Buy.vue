<template>
  <div>
<div class="ui-form ui-border-t">
    <form action="">
        <div class="ui-form-item ui-border-b">
            <label>
                {{ patent.PN }}
            </label>
        </div>
        <div class="ui-form-item ui-border-b">
            <label>
                {{ patent.TITLE }}
            </label>
        </div>

        <div class="ui-form-item ui-border-b">
            <label>
                价格
            </label>
            <input v-model="price" type="text" placeholder="输入价格">
            </a>
        </div>

        <section class="ui-input-wrap ui-border-t">
            <div class="ui-input ui-border-radius ui-input-text">
                <input type="textarea" name="" v-model="desc" placeholder="输入描述">
            </div>
        </section>

        <div class="ui-btn-wrap">
            <button class="ui-btn-lg ui-btn-primary" @click="buy">
                确定
            </button>
        </div>
    </form>
</div>



  </div>
</template>

<script>
import _ from 'lodash'
import data from '../api/patents.json'

export default {
  name: 'Buy',
  data () {
    return {
      desc: '',
      price: 0,
      isPublishing: false,
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
        console.log(this.patent.PN, this.price, this.desc);
      App.publish(this.patent.PN, parseInt(this.price)).then(() => {
        this.showAlert = false;
        this.$router.push({
          name: 'myPatents'
        });
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

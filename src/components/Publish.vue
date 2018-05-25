<template>
  <div>
<div v-if="isPublishing" class="ui-tooltips ui-tooltips-guide">
    <div class="ui-tooltips-cnt ui-tooltips-cnt-link ui-border-b">
        <i class="ui-icon-talk"></i>
    </div>
</div>


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
                <input type="textarea" name="" value="" placeholder="输入要求">
            </div>
        </section>

        <div class="ui-btn-wrap">
            <button class="ui-btn-lg ui-btn-primary" @click="showAlert = true">
                确定
            </button>
        </div>
    </form>
</div>



    <div v-if="showAlert" class="ui-dialog show">
        <div class="ui-dialog-cnt">
            <div class="ui-dialog-bd">
                <h3></h3>
                <p>确定要发布？</p>
            </div>
            <div class="ui-dialog-ft">
                <button @click="showAlert = false" type="button" data-role="button">取消</button>
                <button @click="publish" type="button" data-role="button" class="btn-recommand">发布</button>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import _ from 'lodash'
import data from '../api/patents.json'

export default {
  name: 'Publish',
  data () {
    return {
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
    publish() {
      this.isPublishing = true
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

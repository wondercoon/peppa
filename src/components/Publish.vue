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
                Price
            </label>
            <input v-model="price" type="text" placeholder="Price">
            </a>
        </div>

        <section class="ui-input-wrap ui-border-t">
            <div class="ui-input ui-border-radius ui-input-text">
                <input type="textarea" name="" v-model="desc" placeholder="Requirement">
            </div>
        </section>

        <div class="ui-btn-wrap">
            <button class="ui-btn-lg ui-btn-primary" @click="publish">
                Publish
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
  name: 'Publish',
  data () {
    return {
      desc: '',
      price: '',
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

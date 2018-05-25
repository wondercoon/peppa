<template>
  <div>
<div class="ui-form ui-border-t">
    <form action="">

        <div class="ui-form-item ui-border-b">
            <label>
                Price
            </label>
            <input v-model="price" type="text" placeholder="Input price here">
            </a>
        </div>

        <section class="ui-input-wrap ui-border-t">
            <div class="ui-input ui-border-radius ui-input-text">
                <input type="textarea" name="" v-model="desc" placeholder="Input description here">
            </div>
        </section>

        <div class="ui-btn-wrap">
            <button class="ui-btn-lg ui-btn-primary" @click="buy">
                Submit
            </button>
        </div>
    </form>
</div>


<div v-show='ok' class="ui-dialog show">
    <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
            <p>Success</p>
        </div>
        <div class="ui-dialog-ft">
            <button type="button" @click="gotoMe" data-role="button" class="btn-recommand">OK</button>
        </div>
    </div>
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
      ok: false,
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
  props: {
      update: {
          type: Function,
          default: _.noop
      }
  },
  methods: {
    gotoMe() {
      this.$router.push({
        name: 'user'
      });
    },
    buy() {
        let param = _.find(this.patents, {PATENT_ID: this.$route.params.id});
        setTimeout(() => {
            this.update('msg', param)
        }, 5000)
        this.ok = true;
    }
  },
  mounted() {
    this.price = _.find(this.patents, {PATENT_ID: this.$route.params.id}).price
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

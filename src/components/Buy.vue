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
                Submit
            </button>
        </div>
    </form>
</div>


<div v-show='ok' class="ui-dialog show">
    <div class="ui-dialog-cnt">
        <div class="ui-dialog-bd">
            <h3>下线通知</h3>
            <p>你的账号于17:00在一台Android手机登录。如非本人操作，密码可能已泄露，建议立即冻结账号。</p>
        </div>
        <div class="ui-dialog-ft">
            <button type="button" data-role="button">退出</button>
            <button type="button" data-role="button" class="btn-recommand">重新登录</button>
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
    buy() {
        console.log(this.patent.PN, this.price, this.desc);
        setTimeout(() => {
            this.update('msg')
        }, 5000)
        this.ok = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <ul class="ui-list ui-list-single ui-border-tb">
        <li class="ui-border-t">
            <div class="ui-list-info">
                <h4 class="ui-nowrap">余额</h4>
                <div class="ui-txt-info">{{money}}</div>
            </div>
        </li>
        
    </ul>
  </div>
</template>

<script>
import data from '../api/patents.json'

export default {
  name: 'HelloWorld',
  data () {
    return {
      money: 0
    }
  },
  created() {
    App.getBalance().then((money) => {
      this.money = money
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

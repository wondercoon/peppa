<template>
  <div>
    wallet  余额{{money}}
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

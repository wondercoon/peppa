<template>
  <div>
    <ul class="ui-list ui-list-single ui-list-link ui-border-tb">
      <li class="ui-border-t" v-for="patent in patents">
        <div class="ui-list-info">
          <h4 class="ui-nowrap">{{patent.TITLE}}</h4>
          <div class="ui-txt-info">$1000</div>
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
      patents: data.data.patentData,
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

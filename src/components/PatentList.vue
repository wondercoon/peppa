<template>
  <div>
    <div v-for="patent in patents">
      {{patent.TITLE}}
    </div>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

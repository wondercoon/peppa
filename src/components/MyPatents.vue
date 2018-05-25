<template>
  <div>
    <my-list :items="refinedList" :keyword="hlword" :item-click="gotoPublish"></my-list>
  </div>
</template>

<script>
import _ from 'lodash'
import Vue from 'vue'
import data from '../api/patents.json'
import MyList from './MyList'

export default {
  name: 'MyPatents',
  components: {MyList},
  data () {
    return {
      keyword: '',
      hlword: '',
      searchMode: false,
      patents: data.data.patentData,
      refinedList: data.data.patentData,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gotoPublish(item) {
      console.log(item)
      this.$router.push({
        name: 'publish',
        params: {
          id: item.PATENT_ID
        }
      });
    }
  },
  created() {
    // App.loadSellingPatents().then((data) => {
      // console.log(data);
    let  data = [{
        pn: 'US8511565',
        price: 10,
        sold: true
      }, {
        pn: 'US7029875',
        price: 11,
        sold: false
      }]

      _.map(data, (st) => {
        var id = _.findIndex(this.patents, {PN: st.pn})
        if (id >= 0) {
          Vue.set(this.patents[id], 'price', st.price)
          Vue.set(this.patents[id], 'sold', st.sold)
        }
      });
      this.refinedList = this.patents;
    // });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

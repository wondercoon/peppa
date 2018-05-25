<template>
  <div>
    <img @click="buy" v-show="ok" class="img" src="../assets/chat.png">
  </div>
</template>

<script>
export default {
  data() {
    return {
      ok: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.ok = true;
    }, 1000);
  },
  methods: {
    buy() {
      App.buy(this.$parent.currentData.PN).then(() => {
        this.showAlert = false;
        this.$router.push({
          name: 'myOrder',
          params: {
            id: 111
          }
        });
     })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
    width: 100%;
}
</style>

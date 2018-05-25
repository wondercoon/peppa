<template>
  <div>
    <img @click="gotoChat" class="img" src="../assets/message.png">
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
    width: 100%;
}
</style>

<script>
export default {
  methods: {
    gotoChat() {
      this.$router.push({
        name: 'chat'
      });
    }
  }
}
</script>
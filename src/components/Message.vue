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
  props: {
    update: {
      type: Function,
      default: _.noop
    }
  },
  methods: {
    gotoChat() {
      this.$router.push({
        name: 'chat'
      });
    }
  },
  mounted() {
    this.update('ack');
  }
}
</script>
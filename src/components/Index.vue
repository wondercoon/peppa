<template>
  <div>
    <img @click="gotoPatents" class="img" src="../assets/index.png">
  </div>
</template>


<script>
export default {
    methods: {
        gotoPatents() {
            this.$router.push({
                name: 'patentList'
            });
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

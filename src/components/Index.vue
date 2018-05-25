<template>
  <div>
    <div class="real-time">Real-time transaction</div>
    <div class="total-label">$ <span>{{ totalStr }}</span></div>
    <img @click="gotoPatents" class="img" src="../assets/index.png">
  </div>
</template>


<script>
export default {
    data() {
      return {
        total: 56781039
      };
    },
    computed: {
      totalStr() {
        return this.formatMoney(this.total, 0, "");
      }
    },
    mounted() {
        setInterval(() => {
          this.total += Math.random() * 20000;
        }, 2000);
     },
    methods: {
        gotoPatents() {
            this.$router.push({
                name: 'patentList'
            });
        },
        formatMoney(number, places, symbol) {
            number = number || 0;
            places = !isNaN(places = Math.abs(places)) ? places: 2;
            symbol = symbol !== undefined ? symbol: "￥";
            var negative = number < 0 ? "-": "",
            i = parseInt(number = Math.abs( + number || 0).toFixed(places), 10) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
            return symbol + negative + (j ? i.substr(0, j) + ",": "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ",") + (places ? "." + Math.abs(number - i).toFixed(places).slice(2) : "");
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
    width: 100%;
    margin-top: 70px;
}
.total-label, .real-time {
  width: 100%;
  height: 80px;
  position: absolute;
  top: 40px;
  z-index: 100;
  background-color: #18b4ed;
  text-align: center;
  color: #fff;
}
.total-label span {
  font-size: 35px;
}
.real-time {
  z-index: 101;
  height: 20px;
  top: 30px;
  font-size: 12px;
}
</style>

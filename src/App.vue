<template>
  <div id="app">
    <p>小猪</p>
    <router-view/>
    <footer class="ui-footer ui-footer-btn">
      <ul class="ui-tiled ui-border-t">
        <li v-link="{name: 'index'}" class="ui-border-r"><div>市场</div></li>
        <li data-href="ui.html" class="ui-border-r"><div>发布</div></li>
        <li data-href="js.html"><div>消息个人</div></li>
        <li data-href="js.html"><div>个人</div></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

<template>
    <ul class="ui-list ui-list-link ui-border-tb">
      <router-link tag="li" :to="{name: 'detail', params: {id: patent.PATENT_ID}}" class="ui-border-t" v-for="patent in items">
        <div class="ui-avatar">
            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
        </div>
        <div class="ui-list-info">
            <h4 class="ui-nowrap">{{patent.PN}}</h4>
            <p class="ui-nowrap" v-html="hl(patent.TITLE, keyword)"></p>
        </div>
      </router-link>
    </ul>
</template>
<script>
export default {
    name: 'list',
    props: {
        items: {
            type: Array,
            default() {
                return [];
            }
        },
        keyword: {
            type: String,
            default: ''
        }
    },
    methods: {
        hl(val, keyword) {
            return val.replace(keyword, `<span style="color: #17c24f">${keyword}</span>`);
        }
    }
}
</script>


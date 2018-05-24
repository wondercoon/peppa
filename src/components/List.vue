<template>
    <ul class="ui-list ui-list-single ui-list-link ui-border-tb">
      <router-link tag="li" :to="{name: 'detail', params: {id: patent.PATENT_ID}}" class="ui-border-t" v-for="patent in items">
        <div class="ui-list-info">
          <h4 class="ui-nowrap" v-html="hl(patent.TITLE, keyword)"></h4>
          <div class="ui-txt-info">{{patent.price}}</div>
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


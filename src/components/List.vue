<template>
    <ul class="ui-list ui-list-link ui-border-tb">
      <li class="ui-border-t" v-for="patent in items" @click="onItemClick(patent)">
        <div class="ui-avatar">
            <span style="background-image:url(http://placeholder.qiniudn.com/100x100)"></span>
        </div>
        <div class="ui-list-info">
            <h4 class="ui-nowrap">{{patent.PN}}</h4>
            <p class="ui-nowrap" v-html="hl(patent.TITLE, keyword)"></p>
        </div>
        {{patent.price}}
      </li>
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
        },
        itemClick: {
            type: Function,
            default: _.noop
        }
    },
    methods: {
        hl(val, keyword) {
            return val.replace(keyword, `<span style="color: #17c24f">${keyword}</span>`);
        },
        onItemClick(item) {
            this.itemClick(item);
        }
    }
}
</script>


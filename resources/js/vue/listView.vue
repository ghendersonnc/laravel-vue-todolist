<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item
                :item="item"
                class="item"
                v-on:itemchanged="$emit('reloadlist')"
            />
        </div>
    </div>
</template>


<script>
import listItem from './listItem';

export default {
    props: ['items'],
    components: {
        listItem
    }
}
</script>

<style scoped>
.item {
    background: #b6b6b6;
    padding: 5px;
    margin-top: 5px;
    border: black solid 1px;
    border-radius: 2px;
}
</style>

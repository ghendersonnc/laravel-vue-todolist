<template>
    <div class="container">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form v-on:reloadlist="getList()" />
        </div>
        <list-view
            :items="items"
            v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
import addItemForm from './addItemForm.vue';
import listView from './listView.vue';
export default {
    components: {
        addItemForm,
        listView
    },
    data: () => {
        return {
            items: []
        }
    },
    methods: {
        getList() {
            axios.get('api/items')
            .then(res => {
                this.items = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.container {
    min-width: 300px;
    max-width: 600px;
    margin: auto;
    font-family: sans-serif;

}

.heading {
    background: #7e7e7e;
    padding: 10px;
    height: 150px;
    border: black solid 2px;
    border-radius: 2px;
    box-shadow: 1px 1px 5px;

}

#title {
    text-align: center;
    font-size: 36px;
}
</style>

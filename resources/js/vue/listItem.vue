<template>
    <div class="item">
        <input type="checkbox"
        :true-value="1"
        @change="updateCheck()"
        v-model="item.completed" />

        <span :class="[item.completed ? 'completed' : '', 'itemText']">{{ item.name }}</span>
        <button @click="deleteItem()" class="trash">
            <font-awesome-icon icon="ban"/>
        </button>
    </div>


</template>

<script>
export default {
    props: ['item'],
    methods: {
        updateCheck() {
            axios.put(`api/items/${this.item.id}`, {
                item: this.item
            })
            .then (res => {
                if (res.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch (err => {
                console.log(err);
            });
        },
        deleteItem () {
            axios.delete(`api/items/${this.item.id}`)
            .then(res => {
                if (res.status == 200) {
                    this.$emit('itemchanged');
                }
            })
            .catch (err => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #696969;
}

.itemText {
    width: 100%;
    margin-left: 20px;
}

.item {
    display: flex;
    justify-content: center;
    align-items: center;
}

.trash {
    background: #b6b6b6;
    font-size: 20px;
    border: none;
    color: #e90101;
    outline: none;
    cursor:pointer;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
}
</style>

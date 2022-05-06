<template>
    <div class="addItem">
        <input type="text"
            v-model="item.name"
            placeholder="Task here..."
            onblur="this.placeholder='Task here...'"
            onfocus="this.placeholder=''"
        />
        <font-awesome-icon
            icon="plus-square"
            @click="addItem()"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            item: {
                name: ""
            }
        }
    },
    methods: {
        addItem() {
            if (this.item.name == '') return;

            axios.post('api/items/store', {
                item: this.item
            })
            .then(res => {
                if (res.status == 201) {
                    this.item.name = '';
                    this.$emit('reloadlist');
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    background: #f5f5f5;
    border: 0px;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
    height: 30px;
    font-size: 24px;
    border-radius: 2px;
    outline: none;
}

.plus {
    font-size: 40px;
}

.active {
    color: #000;
}

.inactive {
    color: #474747;
}
</style>

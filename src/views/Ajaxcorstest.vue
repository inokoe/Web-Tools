<script setup>
import '../assets/tool-general-style.css'
import ListItem from "../components/ListItem.vue";
import { ref, onMounted } from 'vue'
import axios from 'axios'

const status = ref('')
const submit = ref('Submit')
const content = ref()
const style_status = ref()
const infoClass = ref()
const input_empty = ref()

function addAnime(obj) {
    obj.value.classList.add('shake-animation');
    obj.value.addEventListener('animationend', () => {
        obj.value.classList.remove('shake-animation');
    }, { once: true });
}

function error_info() {
    status.value = 'Error'
    addAnime(style_status)
    infoClass.value = 'red'
}

async function requester() {
    let urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/
    if(!content.value){
        addAnime(input_empty)
        return
    }
    if (!urlPattern.test(content.value)) {
        error_info()
        return;
    }
    await axios.get(content.value).then(response => {
        if (response.status == '200') {
            status.value = 'Success'
            infoClass.value = 'green'
            console.log(response)
        }
    }).catch(error => {
        error_info()
    })
}

</script>

<template>
    <div class="container">
        <h2 class="green title">Ajaxcorstest</h2>
        <ListItem class="status">
            <template #heading>Input Url</template>
            <input type="text" v-model="content" ref="input_empty">
            <p id='info' :class="infoClass" ref="style_status">{{ status }}</p>
            <button class="submit" @click="requester">{{ submit }}</button>
        </ListItem>
    </div>
</template>


<style lang="less" scoped>
input {
    width: 100%;
    border-radius: 20px;
    height: 2rem;
    font-size: 1rem;
}

#info {
    font-size: 1.5rem;
}
</style>

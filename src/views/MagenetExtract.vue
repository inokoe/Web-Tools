<script setup>
import '../assets/tool-general-style.css'
import ListItem from "../components/ListItem.vue";
import { ref, defineModel } from 'vue'

const content = defineModel({ default: '' })
const textarea = ref([])
const submit = ref('Submit')

function playAnime() {
    textarea.value.classList.add('shake-animation');
    textarea.value.addEventListener('animationend', () => {
        textarea.value.classList.remove('shake-animation');
    }, { once: true });
}

function exactData() {
    if (content.value) {
        let hrefs = content.value.match(/magnet:\?xt=urn:btih:[A-Za-z0-9]+(.+announce)?/g);
        if(hrefs === null){
            playAnime()
            return;
        }
        let lists = '';
        for (let i = 0; i < hrefs.length; i++) {
            lists += hrefs[i];
            if (i !== hrefs.length - 1) {
                lists += '\r\n';
            }
        }
        content.value = lists
        submit.value = 'Find ' + hrefs.length + ' Links.'
    } else {
        console.log(textarea)
        playAnime()
    }
}

</script>

<template>
    <div class="container">
        <h2 class="green title">MagnetExtract</h2>
        <ListItem class="status">
            <template #heading>Text Area</template>
            <form onsubmit="">
                <textarea name="text" id="text" cols="30" rows="10" placeholder="Input Something..." v-model="content"
                    ref="textarea"></textarea>
            </form>
            <button class="submit" @click="exactData">{{ submit }}</button>
        </ListItem>
    </div>
</template>


<style lang="less" scoped></style>

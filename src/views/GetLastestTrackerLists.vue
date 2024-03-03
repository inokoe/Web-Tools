<script setup>
import '../assets/tool-general-style.css'
import ListItem from "../components/ListItem.vue";
import { ref, onMounted } from 'vue'
import axios from 'axios'

const status = ref('Connecting...')
const submit = ref('Remove line breaks')
const content = ref('')
const textarea = ref('')

async function requester() {
    let animeTrackerList, trackerList, ngosang = ''
    await axios.get('https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all.txt').then(response => {
        animeTrackerList = response.data.replace(/[\r\n]/g, "")
    }).catch(error => {
        console.log('[x] https://raw.githubusercontent.com/DeSireFire/animeTrackerList/master/AT_all.txt')
    });
    await axios.get('https://ngosang.github.io/trackerslist/trackers_all.txt').then(response => {
        ngosang = response.data.replace(/[\r\n]/g, "")
    }).catch(error => {
        console.log('[x] https://ngosang.github.io/trackerslist/trackers_all.txt')
    });
    await axios.get('https://trackerslist.com/all.txt').then(response => {
        trackerList = response.data.replace(/[\r\n]/g, "")
    }).catch(error => {
        console.log('[x] https://trackerslist.com/all.txt')
    });
    let str = animeTrackerList + trackerList + ngosang
    if (str == '') {
        status.value = 'Network Error'
        return;
    }
    str = str.replace(/http/g, "*|*|*\r\nhttp").replace(/udp/g, "*|*|*\r\nudp").replace(/wss:\/\//g, "*|*|*\r\nwss://").replace(/ws:\/\//g, "*|*|*\r\nws://").replace("*|*|*\r\n", "")
    str = str.split("*|*|*")
    for (let i = 0, len = str.length; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (str[i] == str[j]) {
                str.splice(j, 1);
                len--;
                j--;
            }
        }
    }
    content.value = str
    status.value = `Total ${str.length} Records`
}

function removeLine() {
    content.value = content.value.toString().replace(/[\r\n]/g, "")
}

onMounted(() => {
    requester()
})


</script>

<template>
    <div class="container">
        <h2 class="green title">Get Lastest Tracker Lists</h2>
        <ListItem class="status">
            <template #heading>{{ status }}</template>
            <form onsubmit="">
                <textarea name="text" id="text" cols="30" rows="10" placeholder="Wait..." v-model="content"
                    ref="textarea"></textarea>
            </form>
            <transition name="anime">
                <button class="submit" v-if="content" @click="removeLine">{{ submit }}</button>
            </transition>
            <div class="tip shake-animation">
                <p>https://github.com/DeSireFire/animeTrackerList</p>
                <p>https://github.com/XIU2/TrackersListCollection</p>
                <p>https://github.com/ngosang/trackerslist</p>
            </div>
        </ListItem>
    </div>
</template>


<style scoped></style>

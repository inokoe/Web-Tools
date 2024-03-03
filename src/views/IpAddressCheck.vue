<script setup>
import '../assets/tool-general-style.css'
import ListItem from "../components/ListItem.vue";
import { ref, onMounted } from 'vue'
import axios from 'axios'

const status_msg = ref('Connecting..')
const status = ref(false)
const ip = ref('')
const server_info = ref('')
const country = ref('')
const city = ref('')
const regionName = ref('')
const isp = ref('')


function get_ip_detail() {
    axios.get('https://other-country-ip.mine.workers.dev/json/')
        .then(response => {
            if (response.status == '200') {
                console.log(response.data)
                server_info.value = response.data
                country.value = response.data.country
                city.value = response.data.city
                regionName.value = response.data.regionName
                isp.value = response.data.isp
                status_msg.value = 'Success! All Work Done!'
            }
        })
        .catch(error => {
            status_msg.value = 'Network Error'
        });
}

onMounted(() => {
    axios.get('https://get-request-ip.mine.workers.dev/')
        .then(response => {
            if (response.status == '200') {
                ip.value = response.data;
                status.value = true
            } else {
                status_msg.value = 'API Error'
            }
            get_ip_detail();
        })
        .catch(error => {
            status_msg.value = 'Network Error'
        });
})

</script>

<template>
    <div class="container">
            <h2 class="green title">IP Address Check</h2>
            <ListItem class="status">
                <template #heading>API Status</template>
                {{ status_msg }}
            </ListItem>
            <ListItem class="status" v-if="ip">
                <template #heading>IP</template>
                {{ ip }}
            </ListItem>
            <ListItem class="status" v-if="server_info">
                <template #heading>Server Info</template>
                <p>Country: {{ country }}</p>
                <p>City: {{ city }}</p>
                <p>Region: {{ regionName }}</p>
                <p>ISP: {{ isp }}</p>
            </ListItem>
    </div>
</template>


<style lang="less" scoped>

</style>

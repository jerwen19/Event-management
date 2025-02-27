<template>
    <div>
        <router-link to="/">Back to home</router-link>
        <p>This is profile</p>
        <p>User name : {{ userInfo.username }}</p>
        <p>Password : {{ userInfo.password }}</p>
        <button class="bg-red-600 rounded-lg text-gray-50 p-3" @click="isUpdateShow = !isUpdateShow">Update
            profile</button>
        <div v-if="isUpdateShow" class="flex flex-col gap-3">
            <label for="">Username to update</label>
            <input type="text" v-model="userInfo.username" class="p-3 bg-gray-200">
            <button type="button" @click="updateUsernameHandler" class="bg-green-600 p-3">Update Username</button>

        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'

const route = useRoute()

const isUpdateShow = ref(false)


const userInfo = reactive({
    username: '',
    password: ''
})

const id = ref('')

id.value = route.params.id



const getSingleUser = async () => {
    try {
        const response = await axiosClient.get('/getUser/' + id.value)
        console.log('====================================');
        console.log(response.data.user);
        console.log('====================================');

        userInfo.username = response.data.user.username;
        userInfo.password = response.data.user.password;
    } catch (err) {
        console.log(err.message)
    }
}

const updateUsernameHandler = async () => {
    try {
        const response = await axiosClient.patch('/users/' + id.value, {
            username: userInfo.username
        })
        console.log('====================================');
        console.log(response);
        console.log('====================================');
    } catch (err) {
        console.log(err.message)
    }
}

onMounted(async () => {
    await getSingleUser()
})

</script>

<style lang="scss" scoped></style>
<template>

    <div class="shadow-xl w-3/6 bg-gray-200 p-3 rounded-xl">
        <router-link to="/">Back to home</router-link>
        <h1 class="text-center font-bold text-3xl">Users Registration</h1>
        <div class="flex flex-col p-3">
            <label for="">Username</label>
            <input v-model.trim="username" class="p-2" type="text" placeholder="Username">

        </div>
        <div class="flex flex-col p-3">
            <label for="">Password</label>
            <input v-model.trim="password" class="p-2" placeholder="Password" type="password">

        </div>
        <button @click="registerNewUser" type="button" class="bg-green-600 text-gray-50 w-full rounded p-3">Create
            Account</button>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import axiosClient from '../axiosClient.js'
const username = ref('')
const password = ref('')


const registerNewUser = async () => {
    try {
        const response = await axiosClient.post('/registration',
            {
                username: username.value,
                password: password.value
            }
        )
        console.log('====================================');
        console.log(response);
        console.log('====================================');
    } catch (err) {
        console.log(err.message)
    }
}

</script>

<style lang="scss" scoped></style>
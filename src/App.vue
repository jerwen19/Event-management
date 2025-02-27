<!--<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from './axiosClient'

const usersList = ref([''])
const username = ref('')
const password = ref('')

onMounted(async () => {
  await getUsers()
})

const getUsers = async () => {
  try {
    const response = await axiosClient.get('/getUsers')
    usersList.value = response.data.usersList;
  } catch (err) {
    console.log(err.message)
  }
}

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
</script>-->
<script>
import TheHeader from './component/TheHeader.vue';
</script>

<template>
  
  <TheHeader />
  <div class="flex justify-center items-center h-dvh">
    <RouterView />

  </div>

</template>

<style scoped></style>

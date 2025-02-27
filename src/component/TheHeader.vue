<template>
    <div >
        <header class="bg-gray-800">
            <nav class="w-5/6 p-4 mx-auto">
                <div class="container flex item-center justify-between mx-auto">
                    <router-link class="text-gray-50 items-starts" :to="{ name: 'home'}">School Event Management System</router-link>
                    <ul>
                        <router-link class="p-3 text-gray-900 bg-gray-50 rounded-x1" :to="{ name: 'signup'}">Sign Up</router-link>
                        <router-link class="p-3 px-3 border border-gray-50 text-gray-50 border-1 rounded-x1" :to="{ name: 'Signin'}">Sign In</router-link>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>
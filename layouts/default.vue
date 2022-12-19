<template>
    <div>
        <header class="flex justify-center gap-20 text-2xl bg-violet-900 text-white py-2">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/dashboard">Dashboard</NuxtLink>
            <NuxtLink to="/Notes/add">Notes</NuxtLink>
            <NuxtLink to="/Notes/list">List</NuxtLink>
        </header>

        <div class="flex">
            <sidebar class="flex flex-col gap-3 bg-slate-200 p-7 h-screen mr-7">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                <NuxtLink to="/Notes/add">Notes</NuxtLink>
                <NuxtLink to="/Notes/list">List</NuxtLink>
            </sidebar>

            <slot></slot>
        </div>

        <footer class="fixed bottom-0 w-screen bg-violet-900 text-white py-2 text-center">
            <p>@ 2022 created by Satyabrat Jha</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
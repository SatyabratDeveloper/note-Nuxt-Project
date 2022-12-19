<template>
    <div>
        <header class="flex justify-center gap-20 text-2xl bg-violet-900 text-white py-2">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/dashboard">Dashboard</NuxtLink>
            <NuxtLink to="/Notes">Notes</NuxtLink>
        </header>

        <div class="flex">
            <sidebar class="bg-slate-200 px-7 py-3 min-h-screen mr-7">
                <h3 class="my-3">Home</h3>
                <h3 class="my-3">Dashboard</h3>
                <h3 class="my-3">Notes</h3>
            </sidebar>
    
            <slot></slot>
        </div>

        <footer class="fixed bottom-0 bg-violet-900 text-white py-2 text-center">
            <h3>Footer</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit laboriosam dolorum praesentium dolores labore numquam unde corrupti, doloribus quaerat veniam voluptas excepturi consectetur ex rerum eveniet quibusdam pariatur laborum reiciendis.</p>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
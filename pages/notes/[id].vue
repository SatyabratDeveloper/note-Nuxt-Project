<template>
    <div>
        <div class="bg-slate-300 m-7 py-7 px-10 border rounded-md shadow-lg h-fit">
        <ul v-for="item in noteStore.data" :key="item.id">
            <div v-if="item.title.toLowerCase() === routeId">
                <li class="text-2xl text-violet-700 font-bold">{{ item.title }}</li>
                <li class="text-1xl text-gray-500">{{ item.message }}</li>
            </div>
        </ul>
    </div>
    </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

const route = useRoute()
const routeId = route.params.id

definePageMeta({
    // middleware: ['auth']
    
    middleware: process.client ? 'auth' : undefined
})

</script>

<style scoped>

</style>
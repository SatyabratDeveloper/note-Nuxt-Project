<template>
    <div class="bg-slate-300 m-7 py-7 px-12 border rounded-md shadow-lg h-fit">
        <ul v-for="item in noteStore.data" :key="item.id" class="my-5">
            <li class="text-2xl text-violet-700 font-bold">{{ item.title }}</li>
            <li class="text-1xl text-gray-500">{{ item.message }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

definePageMeta({
    middleware: ['list-auth']
})
</script>

<style scoped>

</style>
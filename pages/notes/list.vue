<template>
    <div class="bg-slate-400 m-7 py-7 px-10 border rounded-md shadow-lg h-fit">
        <ul v-for="item in noteStore.data" :key="item.id">
            <li class="text-2xl text-violet-700 font-bold">{{ item.subject }}</li>
            <li class="text-1xl text-gray-500 font-bold">{{ item.message }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()
</script>

<style scoped>

</style>
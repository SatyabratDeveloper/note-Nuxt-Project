<template>
    <!-- add page to add itemes in note -->
    <div class="flex flex-col gap-3 mx-auto mt-7 w-8/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-4/12 2xl:w-4/12">
        <input type="text" v-model="noteStore.title" placeholder="Title" class="bg-slate-50 py-1 px-3 border border-slate-300 rounded-md">
        <textarea cols="30" v-model="noteStore.message" rows="10" placeholder="Enter your message" class="bg-slate-50 py-1 px-3 border border-slate-300 rounded-md"></textarea>
        <button type="submit" @click="noteStore.onAdd" class="bg-violet-900 text-white border rounded-md p-1">Add Note</button>
    </div>
</template>

<script setup lang="ts">
// importing store
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()
</script>
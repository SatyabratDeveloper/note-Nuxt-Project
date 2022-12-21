<template>
    <div>
        <!-- list of item found in current route -->
        <div class="bg-slate-300 m-7 py-7 px-10 border rounded-md shadow-lg h-fit">
        <ul v-for="item in noteStore.noteData" :key="item.id">
            <div v-if="item.title.toLowerCase() === routeId">
                <li class="text-2xl text-violet-700 font-bold">{{ item.title }}</li>
                <li class="text-1xl text-gray-500">{{ item.message }}</li>
            </div>
        </ul>
    </div>
    </div>
</template>

<script setup lang="ts">
// importing store
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

// useRoute to get route details
const route = useRoute()
const routeId = route.params.id

// defining middleware
definePageMeta({
    // process.client to run middleware on client side only
    middleware: process.client ? 'auth' : undefined
})
</script>
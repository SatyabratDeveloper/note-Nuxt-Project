<template>
    <!-- Navbar component -->
    <div>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        <NuxtLink to="/Notes/add">Notes</NuxtLink>
        <NuxtLink to="/Notes/list" v-if="noteStore.dataLengthCounter">List</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()
</script>
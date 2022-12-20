import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

// middleware to stop wrong routes navigation
export default defineNuxtRouteMiddleware(() => {
    console.log(noteStore.data.length)
    if(noteStore.filteredList.length === 0) {
        return navigateTo('/error')
    }
})
import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

// middleware to stop navigate to list route if its empty
export default defineNuxtRouteMiddleware(() => {
    console.log(noteStore.data.length)
    if(noteStore.data.length === 0) {
        return navigateTo('/error')
    }
})
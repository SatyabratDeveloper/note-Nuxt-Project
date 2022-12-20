import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

export default defineNuxtRouteMiddleware(() => {
    console.log(noteStore.data.length)
    if(noteStore.filteredList.length === 0) {
        return navigateTo('/error')
    }
})
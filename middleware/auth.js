import { useNoteStore } from '@/store/notesStore'
const noteStore = useNoteStore()

const route = useRoute()

// filteredList to filter notes using routes
const filteredList = noteStore.noteData.filter(note => note.title.toLocaleLowerCase() === route.params.id)

// middleware to stop wrong routes navigation
export default defineNuxtRouteMiddleware(() => {
    if(!filteredList.length > 0) {
        return navigateTo('/error')
    }
})
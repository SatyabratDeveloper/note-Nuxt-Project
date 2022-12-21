import { defineStore } from 'pinia'

// creating store
export const useNoteStore = defineStore('store', () => {
    // title and message to store input from users
    let title = ref<string>('')
    let message = ref<string>('')
    
    type listData = {
        id: number,
        title: string,
        message: string
    }

    // Array of objects to store data
    const data = ref<listData[]>([
        // { id: 1, title: 'Book', message: "Read 'The sun also rises by Ernest Hemingway'" },
        // { id: 2, title: 'Presentation', message: 'Continue working on next week’s presentation file' },
        // { id: 3, title: 'Food', message: 'Prepare Food' },
        // { id: 4, title: 'Update', message: 'Update Laptop\'s Windows Software'}
    ])

    // getters
    const noteData = computed(() => data.value)
    // return the length of data
    const dataLengthCounter = computed(() => data.value.length > 0)

    // setters/action
    // function to add note object to data
    function addNote() {
        data.value.push({ id: data.value.length, title: title.value, message: message.value })
        message.value = ''
        title.value = ''
    }
    
    return { title, message, addNote, dataLengthCounter, noteData }
})
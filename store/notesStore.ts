import { defineStore } from 'pinia'

export const useNoteStore = defineStore('store', () => {
    let subject = ref<string>('')
    let message = ref<string>('')
    
    type listData = {
        id: number,
        subject: string,
        message: string
    }

    const data = ref<listData[]>([
        { id: 1, subject: 'Book', message: "Read 'The sun also rises by Ernest Hemingway'" },
        { id: 2, subject: 'Presentation', message: 'Continue working on next week’s presentation file' },
        { id: 3, subject: 'Food', message: 'Prepare Food' },
        { id: 4, subject: 'Update', message: 'Update Apple TV Software'}
    ])

    function onAdd() {
        data.value.push({ id: data.value.length, subject: subject.value, message: message.value })
        message.value = ''
        subject.value = ''
    }


    return { subject, message, data, onAdd }
})
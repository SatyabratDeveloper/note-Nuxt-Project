import { defineStore } from 'pinia'

export const useNoteStore = defineStore('store', () => {
    let subject = ref<string>('')
    let message = ref<string>('')
    
    type listData = {
        id: number,
        subject: string,
        message: string
    }

    const data = ref([
        { id: 1, subject: 'Book', message: 'Read a Book' },
        { id: 2, subject: 'Milk', message: 'Buy some Milk' },
        { id: 3, subject: 'Food', message: 'Prepare Food' },
    ])

    function onAdd() {
        data.value.push({ id: data.value.length, subject: subject.value, message: message.value })
        message.value = ''
        subject.value = ''
    }


    return { subject, message, data, onAdd }
})
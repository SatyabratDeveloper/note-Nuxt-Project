import { defineStore } from 'pinia'

export const useNoteStore = defineStore('store', () => {
    let title = ref<string>('')
    let message = ref<string>('')
    
    type listData = {
        id: number,
        title: string,
        message: string
    }

    const data = ref<listData[]>([
        // { id: 1, title: 'Book', message: "Read 'The sun also rises by Ernest Hemingway'" },
        // { id: 2, title: 'Presentation', message: 'Continue working on next week’s presentation file' },
        // { id: 3, title: 'Food', message: 'Prepare Food' },
        // { id: 4, title: 'Update', message: 'Update Laptop\'s Windows Software'}
    ])

    const route = useRoute()
    const filteredList = data.value.filter(note => note.title.toLocaleLowerCase() === route.params.id)
    // console.log(route.params.id)
    // const dataTitle = computed(() => data)
    // console.log(dataTitle.value)

    function onAdd() {
        data.value.push({ id: data.value.length, title: title.value, message: message.value })
        message.value = ''
        title.value = ''
    }

    return { title, message, data, onAdd, filteredList }
})
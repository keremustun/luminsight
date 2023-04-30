import { reactive } from 'vue'

export const store = reactive({
    loggedInPerson:{
        email: '',
        skills: []
    },
},)

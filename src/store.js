import { reactive } from "vue";


// save our state (is the sidebar open or not)
export const store = reactive({
    isSidebarOpen: false
})

export const mutations = {
    toggleNav(){
        store.isSidebarOpen = !store.isSidebarOpen
    }
}
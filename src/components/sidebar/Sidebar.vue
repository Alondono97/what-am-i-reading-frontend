<template>
    <div>
        <div class="backdrop" @click="closeSideBar" v-if="isOpen"></div>
        <transition name="slide">
            <div v-if="isOpen" class="sidebar"> 
                <h1>Book List</h1>
                <ol>
                    <li v-for="book in booklist" :key="book">
                        <div class="title"> {{book.title}} </div>
                        <div> {{book.author}} </div>
                    </li>
                    
                </ol>
            </div>
        </transition>
        
    </div>
    
</template>

<script>
import {store, mutations} from '../../store.js'

export default {
    name: 'Sidebar',
    props:{
        booklist: Array
    },
        

    computed: {
        isOpen(){
            return store.isSidebarOpen
        }
    },
    methods: {
        closeSideBar(){
            mutations.toggleNav()
        }
    }
}
</script>

<style scoped>
   
    h1{

    }

    .backdrop{
        height: 100vh;
        width: 100vw;
        position: fixed;
        
        
    }
    .sidebar{
        background-color: #7a9ddd;
        height: 70vh;
        width: 20rem;
        position: fixed;
        z-index: 999;
        padding: 2em;
    }
    ol{
        overflow-y: auto;
        max-height: 60vh;
        text-overflow: ellipsis;
    }
    ol li{
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .title{
        /* margin-left: 1em; */
        overflow-x: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        scrollbar-width: none;
    }
</style>

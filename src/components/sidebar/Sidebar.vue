<template>
    <div class="body">
        <div class="backdrop" @click="closeSideBar" v-if="isOpen"></div>
        <transition name="slide">
            <div v-if="isOpen" class="sidebar"> 
                <div class="infoHeaders">    
                    <h1 :class="{'highlightHeader':isShelf}" @click="changeSidebarDisplay(true)">Book Shelf</h1>
                    <h1 :class="{'highlightHeader':!isShelf}" @click="changeSidebarDisplay(false)">About</h1>
                </div>
                <div v-if="isShelf" class="shelf">
                    <div class="item" v-for="book in booklist" :key="book">
                        <div class="bookTitle"> {{book.title}} </div>
                        <div> {{book.author}} </div>
                    </div>
                </div>
                <div v-if="!isShelf">
                    <div>Hi</div>
                </div>

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
    data(){
        return{
            isShelf: true
        }
    }, 

    computed: {
        isOpen(){
            return store.isSidebarOpen
        }

        

    },
    methods: {
        closeSideBar(){
            mutations.toggleNav()
        },
        changeSidebarDisplay(shelfSideBool){
            this.isShelf = shelfSideBool

        }

    }
}
</script>

<style scoped>
   .body{
       color: #a88464;
   }
    h1{
        color: #d68034;
        /* text-decoration: underline; */
        padding-left: 7px;
        padding-right: 7px;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0.5;
    }
    .highlightHeader{
        opacity: 1;
        text-decoration: underline;
        /* background-color: #414142; */
        

    }
    .infoHeaders{
        display: flex;
        justify-content: space-evenly;
    }

    

    .backdrop{
        height: 100vh;
        width: 100vw;
        position: fixed;
        
        
    }
    .sidebar{
        /* background-color: #7a9ddd; */
        background-color: #dbd7c9;
        height: 70vh;
        width: 21rem;
        position: fixed;
        z-index: 999;
        padding: 2em;
        border-radius: 3px;
    }
    .shelf{
        overflow-y: auto;
        max-height: 60vh;
        text-overflow: ellipsis;
    }
    .item{
        margin-top: 1em;
        margin-bottom: 1em;
    }
    .bookTitle{
        /* margin-left: 1em; */
        overflow-x: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        scrollbar-width: none;
    }
</style>

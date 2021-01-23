<template>
    <div class="body">
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
                <div v-if="!isShelf" class="shelf">
                    <div>
                        <a href="https://twitter.com/alondono97">Twitter</a>
                        <a href="https://github.com/Alondono97/what-am-i-reading-frontend">Github</a>
                    </div>
                    <p class="welcome">Welcome!</p>
                    <p>
                        This website tracks a log of all the books I plan to read this year.
                    </p>


                    <p>
                        My new year resolution for 2021 is to read 1 book every week for 
                        a total of 52 books by the end of the year. If you take a look at the 
                        <span class="fakeLink" @click="changeSidebarDisplay(true)">Book Shelf</span>
                        section you can see a complete list of all 52 books I plan on reading.
                    </p>

                    <p>
                        The books increase in page length as the year progresses starting with books in the mid 200s and 300s 
                        and finishing the year with 600, 700, 800 page books. 
                    </p>

                    <p>
                        The main landing page shows the books I am either currently reading or have already read, in reverse 
                        chronological order. The book I am currently reading appears at the top of the stack, and if you scroll
                        down you can find the first book I read this year. Each book appears with
                        a row of squares representing the days of the week. The idea is to log and track how how much of that book I 
                        read each day. The corresponding squares will show you the percentage of the book I read on those days.
                    </p>

                    <p>
                        I plan to use this site to help me stay consistent with my new year resolution and stick with it over 
                        the course of the entire year. This page will, hopefully, help me build a habit of reading daily, keep me 
                        on track to finish a book per week, and hold me "publically accountable". I encourage any site visitors 
                        that see me falling off of my goal to call me out (publically or privately) and pressure me to stay the course.
                    </p>

                    <p>
                        This website is still a work in progress, but, as it continues to develop, I plan to display more data regarding
                        my daily and weekly progress.
                    </p>

                    <p> 
                        If you're interested in the code I have linked my Github repository at the top of this panel. You are also welcome 
                        to follow and contact me on Twitter.
                    </p>
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

   
    h1{
        color: #d68034;
        padding-left: 7px;
        padding-right: 7px;
        border-radius: 5px;
        cursor: pointer;
        opacity: 0.5;
    }
    p{
        text-align: left;
    }

    a{
        margin-right: 10px;
        color: #d68034;
        
    }
    .body{
       color: #a88464;
    }
    .highlightHeader{
        opacity: 1;
    }
    .infoHeaders{
        display: flex;
        justify-content: space-evenly;
    }
    .welcome{
        text-align: center;
    }
    .sidebar{
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
        overflow-x: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        scrollbar-width: none;
    }

    .fakeLink{
        color: #d68034;
        text-decoration: underline;


    }

    @media only screen and (min-width: 768px) {
 
        .sidebar{
            position: static;
            margin-right: 20px;
        }
    }

</style>

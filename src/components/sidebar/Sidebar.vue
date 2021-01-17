<template>
    <div>
        <div class="backdrop" @click="closeSideBar" v-if="isOpen"></div>
        <transition name="slide">
            <div v-if="isOpen" class="sidebar"> 
                lorem ipum dolor set incum laude telem dulce insem talarm incur test
            </div>
        </transition>
        
    </div>
    
</template>

<script>
export default{
    data: ()=> ({
        isOpen: true
    }),
    methods: {
        closeSideBar(){
            this.isOpen = false
        }
    }
}
</script>

<style scoped>
    .backdrop{
        background-color: chartreuse;
        height: 100vh;
        width: 100vw;
        position: fixed;
        
        
    }
    .sidebar{
        background-color: blueviolet;
        height: 80vh;
        width: 20rem;
        position: fixed;
        z-index: 999;
        /* max-width: 25rem; */
    }
</style>

<template>
    <div class="container" :class="{'anim-vert': isBurgerActive}" @click="toggle">
        <span class="bun"></span>
        <span class="bun"></span>
        <span class="bun"></span>        
    </div>
    
</template>

<script>
import { store, mutations} from '../../store.js'
export default {
    computed: {
        isBurgerActive(){
            return store.isSidebarOpen
        }
    },
    methods:{
        toggle(){
            mutations.toggleNav()

        }
    }
}
</script>

<style scoped>
    .container{
        --boxWidth: 3em;
        --boxHeight: 3em;
        /* background-color: blueviolet; */

        width: var(--boxWidth);
        height: var(--boxHeight);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* box-shadow: 5px 8px #a59f80; */
    }
    .anim-vert{
        /* background-color: hotpink; */
        transform: rotate(90deg);
    }
    
    .bun{
        background-color:#d8ce99;
        width: calc(0.8 * var(--boxWidth));
        height: calc(0.2 * var(--boxHeight));
        margin: 0.1rem;
        border-radius: 1px;
        /* margin: 0.5em; */
        /* margin: 10px;      */
    }
</style>
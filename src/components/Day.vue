<template>
    <div :style="`opacity: ${score}`" @mouseover="hover = true" @mouseleave="hover = false" >
        <span v-if="hover">{{ Math.round(score * 100)}}%</span>
    </div>
    
</template>

<script>
export default {
    name: 'Day',
    props: ['score'],
    data(){
        return{
            hover: false
        }
    }
    
}
</script>

<style scoped>

div { 
    border-style: solid;
    border-width: thin;
    background-color: #cfee91;
    color: #092a35;
    height: 3rem;
    width: 3rem;
    margin: 0.2em;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
<template>
    <div 
        :style="`opacity: ${(score + 20) / 120}`"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <span v-if="hover">{{score}}%</span>
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
    },
    computed: {
        colorSquare() {
            let score = this.score
            let color = ''
            if(score == 100){
                color = '#658525' 
            }
            else if(score >= 90){
                color =  'rgb(81, 235, 81)'
            }
            else if(score >= 80){
                color = 'rgb(255, 255, 0)'
            }
            else if(score >=70){
                color = 'rgb(255, 0, 0)'
            }
            else{
                color = '#f8eeb4'
            }
            
            return 'background-color: ' + color + ';'
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
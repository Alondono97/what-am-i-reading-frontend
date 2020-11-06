<template>
    <div :style="colorSquare">{{}}</div>
    
</template>

<script>
export default {
    name: 'Day',
    props: ['score'],
    computed: {
        colorSquare() {
            let score = this.score
            let color = 'background-color: '
            if(score == 100){
                color += 'rgb(38, 149, 72)' 
            }
            else if(score >= 90){
                color +=  'rgb(81, 235, 81)'
            }
            else if(score >= 80){
                color += 'rgb(255, 255, 0)'
            }
            else if(score >=70){
                color += 'rgb(255, 0, 0)'
            }
            else{
                color += 'rgb(0, 0, 0)'
            }

            return color
        }
    }
    
}
</script>

<style scoped>

div { 
    /* border-style: solid; */
    background-color: rgb(255, 0, 0);
    height: 2rem;
    width: 2rem;
    margin: 0.2em;
    border-radius: 2px;
}

</style>
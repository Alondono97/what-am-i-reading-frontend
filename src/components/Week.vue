<template>
    <div class="week">
        {{title}}:
        <div v-for="(day, index) in days" :key="index">
            <Day :score="days[index]"/> 
        </div>
        Number of Pages: {{pages}}
    </div>
    
</template>

<script>
import Day from './Day.vue'

export default {
    name: 'Week',
    components:{
        Day
    },
    props:[
        "days",
        "title",
        "pages"
    ]

    
}
</script>

<style scoped>
    .week{
        display: flex;
        justify-content: center;
        /* width: 10rem; */
    }
    

</style>
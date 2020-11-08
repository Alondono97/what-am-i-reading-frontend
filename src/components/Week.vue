<template>
    <div class="container">
        <div class="labels">
            <div class="title"> {{title}}</div>
            <div class="pages"> length:     {{pages}} </div>
        </div>
        <div class="week">
            <div class="day" v-for="(day, index) in days" :key="index">
                <Day :score="days[index]"/> 
            </div>
        </div>        
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
    .container{
        /* display: flex; */
        /* justify-content: center;
        flex-direction: column; */
        /* width: 10rem; */
    }
    .week{
        display:flex;
        justify-content: center;
    }

    .labels{
        display: flex;
        justify-content: center;

        /* padding-right: 210px; */
    }
    .title{
        margin-right: 1em;
    }
    .pages{
        margin-left: 1em;
    }

</style>
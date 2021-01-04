<template>
  <div class="hello">
    <img src="../assets/open-book.svg">
    <h1>What Is Alejandro Reading?</h1>
    <div v-for="(week, index) in weeks" :key="index">  
      <Week :days="week.values" :title="week.title" :pages="week.pages" :date="week.date"/> 
    </div>
    <div class="credit">Icons made by 
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a> 
      from 
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import Week from './Week.vue'

export default {
  name: 'HelloWorld',
  components:{
    Week
  },
  props: {
    msg: String
  },
  data: ()=>({
    weeks:[
      {
        values: [0, 0, 0, 0, 0, 0, 0],
        title: "Slaughterhouse 5",
        pages: 200,
        date: "1/3/2021"
      }
      
    ],
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img{
  width:10em;
}


</style>

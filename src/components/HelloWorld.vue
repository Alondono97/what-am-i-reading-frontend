<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(week, index) in weeks" :key="index">  
      <Week :days="week.values" :title="week.title" :pages="week.pages"/> 
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
        values: [0, 90, 80, 70, 100, 100, 100],
        title: "book1",
        pages: 200
      },
      
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
</style>

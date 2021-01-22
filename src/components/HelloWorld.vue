<template>
  <div class="hello">
    <hamburger/>
    <div class="main">
      
      <sidebar class="sideBar" :booklist="booklist"/>
      
      <div class="library">
        <img src="../assets/open-book.svg">
        <h1>What Am I Reading?</h1>
        <div v-for="(week, index) in weeks" :key="index">  
          <Week :days="week.values" :title="week.title" :pages="week.pages" :date="week.date"/> 
        </div>
        <div>Icons made by 
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a> 
          from 
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div> 
      </div>

    </div>
  </div>
</template>

<script>
import Week from './Week.vue'
import Hamburger from './sidebar/Hamburger.vue'
import Sidebar from './sidebar/Sidebar.vue'

export default {
  name: 'HelloWorld',
  components:{
    Week,
    Hamburger,
    Sidebar
  },
  props: {

    msg: String
  },
  data: ()=>({
    weeks:[
      {
        values: [0, 10, 20, 50, 80, 90, 100],
        title: "Brave New World",
        pages: 200,
        date: "1/3"
      },
      {
        values: [0, 0, 0, 0, 0, 0, 0],
        title: "1984",
        pages: 300,
        date: "1/10"
      },
      {
        values: [100, 100, 100, 100, 100, 100, 100],
        title: "Fahrenheit 451",
        pages: 250,
        date: "1/17"
      }
      
    ],
    booklist:[
      {
        title: "Slaughterhouse Five",
        author: "Kurt Vonnegut"
      },
      {
        title: "Vagabonding",
        author: "Rolph Potts"
      },
      {
        title: "What Do You Care What Other People Think?",
        author: "Richard Feynman"
      },
      {
        title: "Stubborn Attachments",
        author: "Tyler Cowens"
      },
      {
        title: "My Stroke of Insight",
        author: "Dr. Jill Bolte Taylor"
      },
      {
        title: "Man's Search for Meaning",
        author: "Victor E. Frankl"
      },
      {
        title: "The Screwtape Letters",
        author: "C. S. Lewis"
      },
      {
        title: "Do Androids Dream of Electric Sheep",
        author: "Phillip K. Dick"
      },
      {
        title: "Zero to One",
        author: "Peter Thiel"
      },
      {
        title: "The Selfish Gene",
        author: "Richard Dawkins"
      },
      {
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams"
      },
      {
        title: "The Year of Magical Thinking",
        author: "Joan Didion"
      }
    ]
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
.main{
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}


</style>

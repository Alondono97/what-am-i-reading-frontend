<template>
  <div class="hello">
    <hamburger/>
    <div class="main">
      
      <sidebar class="sideBar" :booklist="booklist"/>
      
      <div class="library">
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
        values: [6/165, 44/165, 54/165, 80/165, 116/165, 0/165, 0/165],
        title: "Man's Search for Meaning",
        pages: 165,
        date: "2/07/2021"
      },
      {
        values: [28/196, 46/196, 80/196, 105/196, 140/196, 168/196, 196/196],
        title: "My Stroke of Insight",
        pages: 196,
        date: "1/31/2021"
      },
      {
        values: [1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 7/7],
        title: "Stubborn Attachments",
        pages: 277,
        date: "1/24/2021"
      },
      {
        values: [1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 7/7],
        title: "What Do You Care What Other People Think?",
        pages: 277,
        date: "1/17/2021"
      },
      {
        values: [1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 7/7],
        title: "Vagabonding",
        pages: 205,
        date: "1/10/2021"
      },
      {
        values: [1/7, 2/7, 3/7, 4/7, 5/7, 6/7, 7/7],
        title: "Slaughterhouse Five",
        pages: 275,
        date: "1/3/2021"
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
      },
      {
        title: "Dune Messiah",
        author: "Frank Herbert"
      },
      {
        title: "Working In Public",
        author: "Nadia Eghbal"
      },
      {
        title: "Big Sur",
        author: "Jack Kerouac"
      },
      {
        title: "Let My People Go Surfing",
        author: "Yvon Chouinard"
      },
      {
        title: "Ishmael",
        author: "Daniel Quinn"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
      },
      {
        title: "The Road",
        author: "Cormac McCarthy"
      },
      {
        title: "If the Universe is Teeming With Life, Where is Everybody",
        author: "Stephen Webb"
      },
      {
        title: "On Writing",
        author: "Stephen King"
      },
      {
        title: "How to Win Friends and Influence People" ,
        author: "Dale Carnegie"
      },
      {
        title: "A Farewell to Arms",
        author: "Ernest Hemmingway"
      },
      {
        title: "The Winter of Our Discontent",
        author: "John Steinbeck"
      },
      {
        title: "On the Road",
        author: "Jack Kerouac"
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card"
      },
      {
        title: "1984" ,
        author: "George Orwell"
      },
      {
        title: "Life of Pi",
        author: "Yann Martel"
      },
      {
        title: "Don Quixote",
        author: "Miguel de Cervantes"
      },
      {
        title: "The Sixth Extinction",
        author: "Elizabeth Kolbert"
      },
      {
        title: "Blood Meridian",
        author: "Cormac McCarthy"
      },
      {
        title: "Range",
        author: "David Epstein"
      },
      {
        title: "The Martian",
        author: "Andy Weir"
      },
      {
        title: "Shoe Dog",
        author: "Phil Knight"
      },
      {
        title: "The Black Swan",
        author: "Nassim Nicholas Taleb"
      },
      {
        title: "Sapiens" ,
        author: "Yuval Noah Harrari"
      },
      {
        title: "The Three Body Problem",
        author: "Liu Cixin"
      },
      {
        title: "Children of Dune",
        author: "Frank Herbert"
      },
      {
        title: "The Revolt of the Public",
        author: "Martin Gurri"
      },
      {
        title: "The White Plague",
        author: "Frank Herbert"
      },
      {
        title: "Catch 22",
        author: "Joseph Heller"
      },
      {
        title: "The Grapes of Wrath",
        author: "John Steinbeck"
      },
      {
        title: "The Three Muskateers",
        author: "Alexandre Dumas"
      },
      {
        title: "Guns, Germs, and Steel",
        author: "Jared Diamond"
      },
      {
        title: "For Whom the Bell Tolls",
        author: "Ernest Hemmingway"
      },
      {
        title: "The Dream Machine",
        author: "M. Mitchell Waldrop"
      },
      {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas"
      },
      {
        title: "East of Eden",
        author: "John Steinbeck"
      },
      {
        title: "The Girl With the Dragon Tattoo",
        author: "Stieg Larson"
      },
      {
        title: "Alexander Hamilton",
        author: "Ron Chernow"
      },
      {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky"
      },
      {
        title: "11/22/63",
        author: "Stephen King"
      }
    ]
  })
}
</script>

<!--"scoped" attribute limits CSS to this component only -->
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
.credit{
  color: gray;
}

.main{
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

@media only screen and (min-width: 768px) {
  .main{
    justify-content: center;
    align-content: space-between;
  }
}

.credit a{
  color: rgb(134, 133, 133);
}

</style>

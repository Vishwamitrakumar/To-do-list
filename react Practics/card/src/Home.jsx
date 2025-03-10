import React from 'react'
import NavBar from './Includes/NavBar.jsx'
import Footer from './Includes/Footer.jsx'
import Card from './Cards/Card'
import MarqueeCard from './Animation_card/MarqueeCard.jsx'
import Search from './Searchs/Search.jsx'
import Fun from './Searchs/fun.jsx'
import Api from "./Api/Api.jsx"
import useCustom from '../useCustom.jsx'
const Home = () => {
     const {inc , dec , count} = useCustom();
     return (
          <div>
               <NavBar />
               <Search />
               <div class="card_containr">
                    <Card imgsrc="image1.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th (1).jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th.jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
                    <Card imgsrc="th (1).jpeg" title="Card title" card_title="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer" />
               </div>
               < MarqueeCard />

               <Api />
               <Fun />
               <Footer />
               <p>Like Please{count}</p>
               <button onClick={inc}>click</button>
               <button onClick={dec}>dec</button>
          </div>
     )
}

export default Home



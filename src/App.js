import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: "Photoshop" , price: "$999"},
    {name: "Illustator" , price: "$699"},
    {name: "Light Room" , price: "$99"},
    {name: "After Effects" , price: "$2099"},
    {name: "Premier Pro" , price: "$899"},
]

  const friends = [
    {
      name: "Mazlan",
      profession : "Android Developer"
    },
    {
      name: "Mamun",
      profession : "Graphics Designer"
    },
    {
      name: "Sahin",
      profession : "Web Developer"
    },
  ];

  return(

    <div className="App">
      <Person name="Sakib Al Hasan" job="All Rounder"></Person>
      <Person name="Rubel Hassan" job="Baller"></Person>
      <Person name="Masrafee Murtaza" job="Ex Captain"></Person>
      <Person name="Mustafizur Rahaman" job="Baller"></Person>
      {/* <Products name={products[0].name} price={products[0].price}/> */}
      <Products product={products[0]}/>
      <Products product={products[1]}/>
      <Products product={products[2]}/>
      <Products product={products[3]}/>
      <Products product={products[4]}/>

      {
        friends.map(friend => <Friend data={friend}/>)
      }

      <Counter></Counter>    
      <User></User>
      <Posts></Posts>
    </div>
    )

}
function Products(props){
  console.log(props)
    const productStyle = {
      border: "1px solid gray",
      borderRadius: "5px",
      backgroundColor: "lightgray",
      height: "200px",
      width :"200px",
      float: "left",
      margin: "20px"
    }

    const {name , price} = props.product;
    console.log(name, price)
    return (
      <div style={productStyle}>
        <h2>{name}</h2>
         <p>{price}</p>
        <button>Buy Now</button>
      </div>
    )
}
function Person(props){
  console.log(props)
  const style = { 
    margin : "20px 100px" ,
    border: "1px solid red"
  }
  return(
  <div style={style}>
    <h1>{props.name}</h1>
    <p>{props.job}</p>
  </div>)
  
}

function Friend(props){
  const style = {
    width: "50%",
    clear: "both",
    border: "1px solid blue",
    margin :"30px 25%"
  }

  const {name, profession} = props.data;
    return (
      <div style={style}>
        <h2>Name : {name}</h2>
        <p>Profession : {profession} </p>
      </div>
    )
}

function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrese</button>
      <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  )
}

function User(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setUsers(json))
  }, []);
  return(
    <div>
      <h3>Dynamic user {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name} {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Posts(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data=> data.json())
    .then(json => setPosts(json))
  },[])
  const style = {
    border: "1px solid grey",
    margin: "50px"
  }
  return(
   <div>
     {
       posts.map(post => <div style={style}><h2>{post.title}</h2> <p>{post.body}</p></div>)
     }
   </div>

  )
}

export default App;

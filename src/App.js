import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks, setNayoks] =  useState([])
  useEffect(()=>{
     fetch(`https://jsonplaceholder.typicode.com/users`)
     .then(res => res.json())
    //  .then(data => console.log(data))
     .then(data => setNayoks(data))
  }, [])
  // const nayoks = ['Jasim','Deapjol', 'fakira nayok',"canadian hero"]
  // const nayoks = [{name:'Jasim', age: 80},{name:'Deapjol', age: 56},{ name: 'fakira nayok', age: 70},{name:"canadian hero", age: 35}];
  //const age = ['30', '20', '40']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {/* <MovieDisplay></MovieDisplay> */}
      <Nayok name="Jasim"></Nayok>
      <Nayok name="Sakib Kaka"></Nayok>
      <Nayok name="Bappa kaku"></Nayok>
      {/* <Nayok name={nayoks[1]} age="40"></Nayok>
      <Nayok name={nayoks[2]} age={age[1]}></Nayok> */}
      {
        // nayoks.map(nayok => <li>56436</li>)
        // nayoks.map(nayok => <li>{nayok}</li>)
        // nayoks.map(nk => <Nayok name="jasim"></Nayok>)
        nayoks.map(nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function MovieCounter(){
  // const result = useState(0);
  // const [first, second] = ['abc', 'def']
  // const [first, second] = useState(0);
  const [count, setCount] = useState(0);
  //  console.log(first, second)
  // console.log(count, setCount)
 //const count = 5;
//  const handleClick = () => console.log('someone clicked me')
 const handleClick = () => setCount(count + 1);
     return(
       <div>
         <button onClick={handleClick}>Add Movie</button>
         <MovieDisplay movies={count}></MovieDisplay>
         <MovieDisplay movies={count}></MovieDisplay>
         <MovieDisplay movies={count + 5}></MovieDisplay>
         <MovieDisplay movies={count}></MovieDisplay>
         <h3>Number of Movies: {count}</h3>
       </div>
     )
}
function MovieDisplay(props){
  return(
    <h4>Movies I have acted: {props.movies}</h4>
  )
}
function Nayok(props){
  //console.log(props.name)
  const nayokStyle = {
    color: 'blue',
    margin: '20px',
    border: '2px solid red',
    borderRadius: '20px'
  }
  return(
    <div style={nayokStyle}>
        <h1>I am Hero-{props.name}</h1>
        <h3>I have done 30 movies in  {props.age || 30} years</h3>
    </div>
  )
}

export default App;

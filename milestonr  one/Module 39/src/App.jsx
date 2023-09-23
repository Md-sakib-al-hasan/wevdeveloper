// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Player from './Player';
import User from './User';

function App() {
  function handleClick() {
    alert('button click');
  }
  const handleClick2 = () =>{
    alert('alert 2');
  }
  function handleClick3 (num){
    alert(num+5);
  }
  return (
    <> 
      <h3>React core Concepts 2</h3>
      <Counter></Counter>
      <Player></Player>
      <User></User>
      <Friends></Friends>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => handleClick3(3)}>Click 3</button>

    </>
  )
}

export default App

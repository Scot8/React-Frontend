
import { useState } from 'react';
import React from 'react';

let ctr = 0;

function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "Go to gym",
    description: "Hit the gym from 7-9",
    id: 1
  });

  // const [counter, setCounter] = React.useState(Math.random());
  // var nonStateVarible = Math.random();
  // console.log(todoForToday);
  // console.log(counter);
  // console.log(nonStateVarible);

  console.log("render");

  if (ctr === 0) {
    setInterval(() => {
      setTodoForToday({    
        Title: "go to gym please please please",
      description: "hit gym from 7-9",
      id:1
    })
  
    }, 10000);

    ctr = 1;
  }
  else{
    
  }


  return(
    <div>{todoForToday.title}
    <br/>
    {todoForToday.description}
    </div>
    

  )
}

export default App

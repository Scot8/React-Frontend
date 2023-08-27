
import { useState } from 'react';
import React from 'react';

function App() {
  const [todoForToday, setTodoForToday] = React.useState({
    title: "go to gym",
    description: "Hit the gym from 7-9",
    id: 1
  });

  setInterval(() => {
    setTodoForToday({    
      Title: "go to gym please please please",
    description: "hit gym from 7-9",
    id:1
  })

  }, 1000);

  return(
    <div>{todoForToday.title}
    <br/>
    {todoForToday.description}
    </div>
    

  )
}

export default App

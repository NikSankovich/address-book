import React, { useState, useEffect } from'react';
import './App.css';
import People from './People';

export default function App() {
  const [peoples, setPeoples] = useState([]);
  
  
  useEffect(() => {
  console.log('mounted')
  fetch('https://randomuser.me/api?results=25')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    setPeoples(data.results)
});
}, []);

useEffect(() => {
  console.log('updated', peoples);
}, [peoples]);
  
  

  return (
    <div className="App">
      <ul className='people'>
        {peoples.map((people => {
          return <People data={people} />
        })
      )}
      
      </ul>
    </div>
  );
}
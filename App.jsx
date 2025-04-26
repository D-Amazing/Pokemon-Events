// src/App.jsx

import './App.css'
import PokemonEvents from './components/PokemonEvents.jsx'
// import PokemonEvents component
// import CSS
// import React from 'react' // Not needed in React 17 and above
// import ReactDOM from 'react-dom' // Not needed in React 17 and above
// import { useState } from 'react' // Not needed in this example
// import { useEffect } from 'react' // Not needed in this example
// import { useRef } from 'react' // Not needed in this example
// import { useCallback } from 'react' // Not needed in this example

function App() {

  return (
    <>
     <PokemonEvents/>
    </>
  )
}

export default App;

/*Explanation:
We import the CSS
We import the PokemonEvents component so we can use it further below in the JSX being returned
Export App
Lastly, tidy up and test everything
It should work now, and you should be able to visually see all of the messages appearing on the page as the events happen
Be sure to test it out and fix any issues/bugs that may have crept up */ 



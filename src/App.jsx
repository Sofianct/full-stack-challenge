import React, {useState, useEffect} from 'react';
import './App.css'
import GifsContext from './context/GifsContext';
import TagsContext from './context/TagsContext';
import Router from './Routes/Router';

function App() {

  return (
    <GifsContext>
      <TagsContext>
      <Router>
        </Router>
      </TagsContext>
    </GifsContext>
  )
}

export default App

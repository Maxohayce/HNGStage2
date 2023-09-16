// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './container/home';
import MovieItem from './container/movie/movieItem';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/MovieItem/:id" exact element={<MovieItem />} />
      </Routes>
    </>
  )
}

export default App

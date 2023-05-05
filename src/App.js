import React from 'react'
import Home from './Home'
import RecipeDetail from './RecipeDetail'
import {Routes, Route} from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipes/:id" element={<RecipeDetail />}/>
    </Routes>
    </>
  )
}

export default App
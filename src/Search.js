import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  
  const{query, setQuery }= useGlobalContext();
  //console.log(query)
  
  return(
  <section className="search-section">
    <h2>Search Your Favourite Recipe</h2>
    <form action="#" onSubmit={(e) => e.preventDefault()}>
    <div>
    <input type="text"
     placeholder="Enter any Ingredient"
    value={query}
     onChange={(e) => setQuery(e.target.value)}/>
    </div>
    </form>
  </section>
  )
}

export default Search
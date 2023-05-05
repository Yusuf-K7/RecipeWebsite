import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Recipes = () => {
  
  const {recipes}= useGlobalContext();
  //console.log("recipe,",recipes)
  return (
    <section className="recipe-page"> 
    <div className="container grid grid-4-col">
    {recipes && recipes.map((curRecipe)=>{
      //console.log(curRecipe)
      const { calories, uri,label, image} = curRecipe.recipe; 
      const recipeId= uri.split('#')
      //console.log(recipeId)
      const recipeName=label.substring(0,15)
      return <NavLink to={ `recipes/${recipeId[1]}`} key={recipeId[1]}>
        <div key={curRecipe.recipe} className="card">
          <div className="card-info">
            <h2>{recipeName.length >=15 ? `${recipeName}...`:`${recipeName}`}</h2>
            <img src={image} alt={calories}></img>
          </div>
        </div>
      </NavLink>
    })}
    </div>
    </section>
  )
}

export default Recipes
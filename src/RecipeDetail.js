import React, {useState, useEffect} from 'react';
import {NavLink, useParams } from "react-router-dom";


const RecipeDetail = () => {
  const { recipeId } = useParams();
  console.log("recipeId",window.location.pathname.split('/'))
  const id=window.location.pathname.split('/')[2]
  const [isLoading, setIsLoading] = useState(true)
    const [recipes , setRecipes] = useState([]) 

    const YOUR_APP_ID = "433ba713";
    const YOUR_APP_KEY = "d0464b1742f69bfa5c2bfe95ec445b00";

    const API_URL = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`


    const getRecipes= async (url) =>{
      setIsLoading(true);  
      console.log("url",url)
      try{
            const res= await fetch(url);
            const data= await res.json();
            console.log("data",data);

                setIsLoading(false);
                setRecipes(data)
                console.log(data.hits)
        } catch(error){
            //console.log(error);
        }
    }

    useEffect(()=>{
        let timeOut = setTimeout(()=>{
          getRecipes(`${API_URL}`);
        } ,900);
        return ()=>clearTimeout(timeOut);
    },[id]);

    if(isLoading){
      return(
        <div className="recipe-section">
          <div className="loading">Loading...</div>

        </div>
      )
    }

  return(
    <>
    <section className="recipe-section">
      {console.log(recipes)}
      <div className="recipe-card"></div>
      <figure>
        <img src={recipes.recipe.image} alt={recipes.calories}></img>
      </figure>
      <div className="card-content">
        <p className="title">{recipes.recipe.label}</p>
        <p className="card-text">Calories: {recipes.recipe.calories} Kcal (4 servings)</p>
        <p className="card-text">Source: {recipes.recipe.source}</p>
        <p className="card-text">Time Required: {recipes.recipe.totalTime} mins</p>
        <p className="card-text">Total Weight: {recipes.recipe.totalWeight} grams</p>
        <NavLink to="/" className="back-button">Go Back</NavLink>
      </div>

    </section>
    </>
  )
}

export default RecipeDetail
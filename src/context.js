import React, { useContext, useEffect, useState } from "react";


const YOUR_APP_ID = "433ba713";
const YOUR_APP_KEY = "d0464b1742f69bfa5c2bfe95ec445b00";

export const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

const AppContext = React.createContext();

const AppProvider= ({children}) =>{

    const [isLoading, setIsLoading] = useState(true)
    const [recipes , setRecipes] = useState([]) 
    const [query, setQuery] = useState("Chicken")


    const getRecipes= async (url) =>{
        setIsLoading(true);
        try{
            const res= await fetch(url);
            const data= await res.json();
            //console.log(data.Response);
            
                setIsLoading(false);
                setRecipes(data.hits)
                console.log(data.hits)
        } catch(error){
            //console.log(error);
        }
    }

    useEffect(()=>{
        let timeOut = setTimeout(()=>{
          getRecipes(`${API_URL}&q=${query}`);
        } ,500);
        return ()=>clearTimeout(timeOut);
    },[query]); 


    return <AppContext.Provider value={{isLoading, recipes, query, setQuery}}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};
import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrids } from "./components/GifGrids";

const GifExpertApp = () =>{

    //const categories = ['dragon ball', 'superman', 'gatubela'];

    const [categories, setCategories] = useState(['hunter']); 
    
    // const handleAdd = (e) => { 
    //     //setCategories([...categories, 'Super campeones']) PRIMERA FORMA
    //     setCategories( cats =>  [  ...categories, 'Super campeones']) //SEGUNDA FORMA
    // } 
    
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            
            { 
                categories.map((category) => (
                    <GifGrids
                            key={ category }
                            category={ category }
                        />
                ))
            }    
        </>
    ) 
}

export default GifExpertApp;


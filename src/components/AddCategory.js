import React, {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {

    const [inputValue, setState] = useState("")

    const handleInput = (e) => {
        setState(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        setCategories(cats => [inputValue, ...cats])
        setState(""); 
    }
     
    return (
        <form onSubmit={handleSubmit}>
            <h2>Buscar</h2>
            <input 
                type="text" placeholder="Buscar Gifs animados...."  
                value={inputValue}
                    onChange={handleInput} />
            <br />
             
        </form> 
    ) 
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
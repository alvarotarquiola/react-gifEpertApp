import React from "react";

export const GifGridItem = ({id, title, url}) => {
 
    return (
        <div className="card animate__animated animate__fadeIn">
            <figure>
                <img src={url} alt="testeando" />
            </figure> 
            <p>{title}</p>
        </div>
    );
}
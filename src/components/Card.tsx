import React from "react";
import { NavLink } from "react-router-dom";

interface Iprops {
    title: string,
    description?: string,
    code: string
}

function Card({title, description, code} : Iprops) {
    return ( 
        <div className="card card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <NavLink to={code} className="btn btn-primary">Open</NavLink>
        </div>
     );
}

export default Card;
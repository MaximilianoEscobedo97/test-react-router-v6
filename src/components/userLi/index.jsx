import React from "react";
import {NavLink, useLocation} from "react-router-dom"
export function UserLi({id,name,username,phone,email,website}){

    const location = useLocation();

    return (
        <li>
            <NavLink style={({isActive}) => (isActive ? {color:"red"}: {})} to={"/users/"+id+location.search} >{name}</NavLink>
        </li>
    )
}
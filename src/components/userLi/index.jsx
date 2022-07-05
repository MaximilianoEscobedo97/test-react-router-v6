import React from "react";
import {Link} from "react-router-dom"
export function UserLi({id,name,username,phone,email,website}){
    return (
        <li>
            <Link to={"/users/"+id} >{name}</Link>
        </li>
    )
}
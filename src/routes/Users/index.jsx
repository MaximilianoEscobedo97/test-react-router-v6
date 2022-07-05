import React from "react";
import { ListUsers } from "../../components/listUsers";
import { getAllUsers } from "../../services/Data/Users";


export function Users(){

    const users = getAllUsers();

    return(
        <React.Fragment>
            <h1>Usuarios</h1>
            <ListUsers users={users}/>
        </React.Fragment>
    )
}
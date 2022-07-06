import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { ListUsers } from "../../components/listUsers";
import { getAllUsers } from "../../services/Data/Users";


export function Users(){

    const users = getAllUsers();
    const [searchParams, setSearchParamas] = useSearchParams();
    const filter = searchParams.get("filter") ?? "";

    const handleFilter = (e) =>{
        setSearchParamas({filter:e.target.value});
    }

    return(
        <React.Fragment>
            <h1>Usuarios</h1>
            <input value={filter} type="text" onChange={handleFilter} placeholder="Filter"/>
            <ListUsers filter={filter} users={users}/>
            <article>
                <Outlet/>
            </article>
        </React.Fragment>
    )
}
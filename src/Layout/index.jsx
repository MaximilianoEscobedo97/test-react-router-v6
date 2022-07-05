import React from "react";
import {Link, Outlet} from "react-router-dom"
export function Layout(){
    return(
    <React.Fragment>
       <main>
        <Link to="/" >Home</Link>{" °° "}
        <Link to="/users" >Users</Link>{" °° "}
        <Link to="/about" >About</Link>{" °° "}
        </main>     
        <section>
            <Outlet/>
        </section>
    </React.Fragment>)
}
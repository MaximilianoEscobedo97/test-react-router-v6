import React from "react";
import { UserLi } from "../userLi";

export function ListUsers({users, filter}){
    return (
        <ul>
            {users.filter(user =>{
                if(!filter) return true
                const name = user.name.toLowerCase();
                
                return name.includes(filter.toLowerCase())

            }).map((user)=>{
                
                const {id,name,username,phone,email,website} = user

                return (
                    <UserLi
                        key={id}
                        id={id}
                        name={name}
                        username={username}
                        phone={phone}
                        email={email}
                        website={website}
                    />
                )
            })}
        </ul>
    )
}
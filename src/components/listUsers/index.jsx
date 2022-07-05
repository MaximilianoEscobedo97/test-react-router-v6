import React from "react";
import { UserLi } from "../userLi";

export function ListUsers({users}){
    return (
        <lu>
            {users.map((user)=>{
                
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
        </lu>
    )
}
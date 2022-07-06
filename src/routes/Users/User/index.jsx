import React  from "react";
import {useParams,useNavigate} from "react-router-dom"
import { deleteUser, getUser } from "../../../services/Data/Users";

export function User()
{

    const params = useParams();
    const navigate = useNavigate();

    const user = getUser(parseInt(params.userId))

    const handleDelete = () =>
    {
        deleteUser(user.id);
        navigate("/users");
    }


    if(!user)
        return (<div>El usuario no existe</div>)

    return (
        <React.Fragment>
            <h1>{user.name}</h1>
            <div>
                <strong>phone: </strong>{user.phone}
            </div>
            <div>
                <strong>email: </strong>{user.email}
            </div>
            <div>
                <strong>website: </strong>{user.website}
            </div>
            <br/>
            <button onClick={handleDelete}>Delete</button>
        </React.Fragment>
    )
}
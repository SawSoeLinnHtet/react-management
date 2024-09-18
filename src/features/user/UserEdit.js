import Header from "../../layouts/Header"
import UserEditForm from "./UserEditForm";
import { selectUsers } from "./userSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function UserEdit() {
    const users = useSelector(selectUsers);
    const { id } = useParams();
    const user = users.find(user => user.id === parseInt(id));

    console.log(user);
    
    return (
        <div>
            <Header title="User Management" isAdd="0"/>
            <UserEditForm user={user} />
        </div>  
    )
}
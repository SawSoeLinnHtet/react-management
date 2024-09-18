import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import Header from "../../layouts/Header";

export default function User() {
    const [isAddingUser, setIsAddingUser] = useState(false);

    const handleAddUserClick = () => {
        setIsAddingUser(true)
    }

    const handleFormCancel = () => {
        setIsAddingUser(false)
    }

    return (
        <div className="">
            <Header isAdd={ isAddingUser } title={ "Users Management" } handler={ handleAddUserClick } />
            <hr />
            {
                !isAddingUser ? (
                    <UserList />
                ) : (
                    <UserForm onCancel={ handleFormCancel } />
                )
            }
        </div>
    )
}
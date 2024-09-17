import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

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
            <div className="flex items-center justify-between py-5">
                <h4 className="text-xl font-bold">Users Management</h4>
                <button onClick={handleAddUserClick} className="rounded-md bg-blue-500 text-xs text-white px-3 py-2">Add User</button>
            </div>
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
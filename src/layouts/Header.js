import React from "react"

export default function Header(props) {
    return (
        <div className="flex items-center justify-between py-5">
            <h4 className="text-xl font-bold">{ props.title }</h4>
            {
                !props.isAdd ? (
                    <button onClick={props.handler} className="rounded-md bg-blue-500 text-xs text-white px-3 py-2">Add User</button>
                ) : ''
            }
        </div>
    )
}
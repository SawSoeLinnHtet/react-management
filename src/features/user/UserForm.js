import React, {useRef} from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectUsers, add } from "./userSlice"

export default function UserForm({onCancel}) {

    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    
    return (
        <div>
            <form 
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4" 
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(add({
                        id: users[users.length - 1].id + 1,
                        name: nameRef.current.value,
                        username: usernameRef.current.value,
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                    }))

                    onCancel()
                }}
            >
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" ref={nameRef}/>
                </div>
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" ref={usernameRef}/>
                </div>
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" ref={emailRef}/>
                </div>
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" ref={passwordRef}/>
                </div>
                <div className="flex gap-3 pt-5">
                    <button type="submit" className="rounded-md bg-blue-500 text-xs text-white px-3 py-2">Submit</button>
                    <button onClick={onCancel} className="rounded-md bg-slate-400 text-xs text-white px-3 py-2">Cancle</button>
                </div>
            </form>
        </div>
    )
}
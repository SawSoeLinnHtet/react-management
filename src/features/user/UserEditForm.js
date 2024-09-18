import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit, selectUsers } from "./userSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function UserEditForm(props) {
    const { id } = useParams();
    const users = useSelector(selectUsers);
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedUser = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
        };
        dispatch(edit({id:parseInt(id), updatedUser}))

        navigate('/user')
    }

    return (
        <div>
            <form 
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4" 
                onSubmit={handleSubmit}
            >
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" ref={nameRef} defaultValue={props.user.name}/>
                </div>
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" ref={usernameRef} defaultValue={props.user.username}/>
                </div>
                <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-evenly gap-3">
                    <label className="block text-gray-700 text-sm font-bold">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" ref={emailRef} defaultValue={props.user.email}/>
                </div>
                <div className="flex gap-3 pt-5">
                    <button type="submit" className="rounded-md bg-blue-500 text-xs text-white px-3 py-2">Submit</button>
                    <button onClick={() => navigate(`/user`)} className="rounded-md bg-slate-400 text-xs text-white px-3 py-2">Cancle</button>
                </div>
            </form>
        </div>
    )
}
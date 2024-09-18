import { useNavigate, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, remove } from "./userSlice";
import UserEdit from "./UserEdit";

export default function UserList () {
    const navigate = useNavigate();
    const users = useSelector(selectUsers);

    const dispatch = useDispatch();

    return (
        <div className="py-3">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface">
                            <thead
                                className="border-b border-neutral-200 font-medium">
                                <tr>
                                    <th scope="col" className="px-6 py-4">#</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Username</th>
                                    <th scope="col" className="px-6 py-4">Email</th>
                                    <th scope="col" className="px-6 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => {
                                        return (
                                            <tr className="border-b border-neutral-400" key={user.id}>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.name}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    <span onClick={() => navigate(`/user/${user.id}`)} className="text-blue-300 px-2">
                                                        Edit
                                                    </span>
                                                    |
                                                    <span onClick={() => {
                                                        dispatch(remove(user.id))
                                                    }} className="text-red-300 px-2">
                                                        Delete
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                            </table>
                            <Routes>
                                <Route path="/user/:name" element={<UserEdit />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
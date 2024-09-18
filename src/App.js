import { Routes, Route, NavLink } from "react-router-dom"
import Todos from "./features/todos/Todos"
import User from "./features/user/User"
import UserEdit from "./features/user/UserEdit"

export default function App(){
    return (
        <div className="bg-white">
            <div className="px-5 py-5 bg-yellow-300 flex align-middle justify-between">
                <h1 className="text-xl font-bold text-blue-500">Management</h1>
                <ul className="mt-1">
                    <li className="inline px-5">
                        <NavLink to="/todos" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Todos</NavLink>
                    </li>
                    <li className="inline px-5">
                        <NavLink to="/user" className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>Users</NavLink>
                    </li>
                </ul>
            </div>
            <div className="px-5 py-5">
               <Routes>
                    <Route path="/todos" element={<Todos/>} />
                    <Route path="/user" element={<User/>} />
                    <Route path="/user/:id" element={<UserEdit/>} />
               </Routes>
            </div>
        </div>
    )
}
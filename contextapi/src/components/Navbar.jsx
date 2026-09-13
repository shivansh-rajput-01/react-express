import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="w-screen p-4 bg-slate-950 text-white flex justify-around pr-[50vw]">
            <NavLink to="/" className={({isActive}) => isActive?"text-blue-400": ""}>Home</NavLink>
            <NavLink to="/login" className={({isActive}) => isActive?"text-blue-400": ""}>Login</NavLink>
        </div>
    )
}
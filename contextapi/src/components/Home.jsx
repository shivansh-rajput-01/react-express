import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function Home(){
    const {user} = useContext(UserContext);
    return (
        !user ? (
            <div>Please Login</div>
        ) : (
            <div className="bg-slate-700 text-white text-2xl p-4">Welcome {user.userName} your password is {user.password}</div>
        )
    )
}
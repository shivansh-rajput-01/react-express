import { useContext, useState } from "react"
import UserContext from "../contexts/UserContext";

export default function Login(){
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    let {setUser} = useContext(UserContext);

    function handleLogin(){
        if(userName.trim() != "" && password.trim() != ""){
            setUser({userName, password});
            setUserName("");
            setPassword("");
        }
    }

    return (
        <div className="w-screen h-[70vh] flex justify-center items-center">
            <div>
                <p className="text-2xl text-slate-800">Login</p>
                <input type="text" placeholder="Username" value={userName} onChange={(e) => {setUserName(e.target.value)}} className="w-100 h-10 outline rounded-sm mb-4" required/>
                <br />
                <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="w-100 h-10 outline rounded-sm mb-4" required/>
                <br />
                <button className="w-100 h-10 outline rounded-sm bg-green-700 text-white" onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

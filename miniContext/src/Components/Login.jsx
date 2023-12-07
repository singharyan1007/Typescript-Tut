import React, {useState,useContext} from "react";
import UserContext from "../Context/UserContext";



function Login(){
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const {setUser} =useContext(UserContext);
    function handleSubmit(e){
        e.preventDefault();
        setUser({userName,password});
        
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            {" "}
            <input type="text" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {" "}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
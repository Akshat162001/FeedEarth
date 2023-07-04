import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import "/app.css"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header=()=>{
    let [loginButton,setLoginButton]=useState("Login")
    let onlineStatus=useOnlineStatus()
    return <div className="flex justify-between ">
        <div className="logo-container">
            <img className="w-24" src={LOGO_URL} alt="" />
        </div>
        <div className="navitems">
            <ul>
            <li>Online Status: {onlineStatus ? "🟢":"🔴"}</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About us</li></Link>
               <Link to="/contact"><li>contact Us</li></Link>
               <Link to="/grosary"><li>Grosary</li></Link>


              <button onClick={()=>loginButton=="Login"? setLoginButton("Logout"):setLoginButton("Login")}>{loginButton}</button>
                
            </ul>
        </div>
    </div>
}

export default Header
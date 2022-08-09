import "./navbar.css"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">hotelbooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button onClick={()=>navigate("/login")} className ="navButton">Login</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar
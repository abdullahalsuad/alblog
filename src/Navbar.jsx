import { NavLink } from "react-router-dom";
import classes from "./Heade.module.css";

const Navbar = () => {
    return ( 
        <nav className={classes.navbar}>
            <h1>The <span style={{'color':'#566D7E'}}>Blog </span> </h1>
            <div className={classes.links}>
                <NavLink to="/"  className={(navActive) => (navActive.isActive ? classes.active : "")}  >Home</NavLink>
                <NavLink to="/create" className={(navActive) => (navActive.isActive ? classes.active : "") }>New Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar ;
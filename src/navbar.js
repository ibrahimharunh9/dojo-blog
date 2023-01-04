
import{ Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/" style={{color:'black',backgroundColor:'white',borderRadius:'8px'}}>Home</Link>
                <Link to="/create" style={{color:'white',backgroundColor:'#f1356d',borderRadius:'8px'}}>New blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
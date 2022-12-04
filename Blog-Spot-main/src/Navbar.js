import { Link } from "react-router-dom";


const Navbar=()=>{
    return (
        <div className="sticky" >

        <nav className="navbar" >
            <h1 style={{color:"white"}}>Developer's Blogs</h1>
            <div className="links" >
                {/* <a href="/">Home</a> */}
                {/* <a href="/Create">New Blog</a> */}
                {/* thse are used in react to handel switch request with in the browser but will be visible as ancor tags in html injected in browser*/}
                <Link to="/">Home</Link>
                <Link to="/Create">New Blog</Link>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;
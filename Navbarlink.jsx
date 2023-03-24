import React from "react";
import { Link } from 'react-router-dom'
const Navbarlink = () => {
    return
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg" > 
    <Link to="#" className="navbar-brand">KITTU</Link>
    <div className="ml-auto">
        <ul className="navbar-nav">
            <li className="nav-list"><link className="nav-link" to="Homenav">Home</link></li>
            <li className="nav-list"><link className="nav-link" to="Servicenav">Service</link></li>   
        </ul>
      </div>
    </nav>
}
export default Navbarlink
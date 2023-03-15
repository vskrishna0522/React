import React from 'react'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
               <a href="#" className="navbar=brand">React World </a>
               <div className="collapse navbar-collapse justify-contend-end">
                <ul className="navbar-nav ">
                    <li className="nav-list">
                        <a className="nav-link" href="#"> home</a>
                    </li>
                    <li className="nav-list">
                        <a className="nav-link" href="#"> service</a>
                    </li>
                    <li className="nav-list">
                        <a className="nav-link" href="#"> contact</a>
                    </li>
                    <li className="nav-list">
                        <a className="nav-link" href="#"> about</a>
                    </li>
                </ul>

               </div>
        </nav>
    }
}
export default Navbar
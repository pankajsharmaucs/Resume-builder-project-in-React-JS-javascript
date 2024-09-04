import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <>
          
            <div className='container-fluid p-0 bg-main'>
            <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-main">
                <div className="container-fluid">
                        <Link to="/" className="navbar-brand fw-bold">PS Resume Builder</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className="nav-link" href="#">
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Account
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/login" className="dropdown-item" href="#">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link  to="/signUp" className="dropdown-item" href="#">
                                            SignUp
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </li>
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
            </div>
            </div>

            
        </>
    )
}

export default Header

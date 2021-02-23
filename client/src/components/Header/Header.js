import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {GlobalState} from '../../GlobalState';
import axios from 'axios';
import './header.css';

const Header = () => {

    const state = useContext(GlobalState);
    const [isLogged] = state.userAPI.isLogged;
    const [isAdmin] = state.userAPI.isAdmin;
    const [menu, setMenu] = useState(false);

    const styleMenu = {
        right: menu ? 0 : "-100%"
    }

    const logout = async () => {
        try {
            
            await axios.get('/user/logout')
            
            localStorage.removeItem('firstLogin')

            window.location.href = '/'

        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    const loggedRouter = () => {
        return (
            <>
                <li><Link to="/" className="nav-links" onClick={logout}><i class="fas fa-sign-out-alt"></i>&nbsp;LogOut</Link></li>
            </>
        )
    }

    const adminRouter = () => {
        return (
            <>
                <li><Link to="/user" className="nav-links" onClick={() => setMenu(!menu)}><i className="fas fa-user"></i>&nbsp;User</Link></li>
            </>
        )
    }
    
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>
                        <Link to="/"><i className="fab fa-bitcoin"></i>BITCOIN</Link>
                    </h1>
                </div>

                <div className="menu" onClick={() => setMenu(!menu)}>
                    <i className="fas fa-bars"></i>
                </div>

                <ul style={styleMenu}>
                    <li><Link to="/" className="nav-links" onClick={() => setMenu(!menu)}><i className="fas fa-home"></i>&nbsp;Home</Link></li>
                    <li><Link to="/about" className="nav-links" onClick={() => setMenu(!menu)}><i className="fas fa-scroll"></i>&nbsp;About</Link></li>
                    <li><Link to="/contact" className="nav-links" onClick={() => setMenu(!menu)}><i className="fas fa-map-marked-alt"></i>&nbsp;Contact</Link></li>
                    
                    { isAdmin && adminRouter() }

                    {
                        isLogged ?
                        loggedRouter() : 
                        <li><Link to="/login" className="nav-links" onClick={() => setMenu(!menu)}><i className="fas fa-sign-in-alt"></i>&nbsp;SignIn</Link></li>
                    }

                    <li onClick={() => setMenu(!menu)} className="cruz">
                        <i className="fas fa-times"></i>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header

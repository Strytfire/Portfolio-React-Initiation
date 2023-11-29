import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        
        <div className='navigation'>
            <div className='nav-container'>
                    <img src='Logo.svg' alt=''></img>
                    <div className='nav-title_name'>
                        <ul>
                            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                <li className='select-active'>Acceuil</li>
                            </NavLink>
                            <NavLink to="/about" className="">
                                <li className='select-active'>A propos</li>
                            </NavLink>
                            <NavLink to="/project" className="">
                                <li className='select-active'>Projet</li>
                            </NavLink>
                            <NavLink to="/contact" className="">
                                <li className='select-active'>Contact</li>
                            </NavLink>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Navigation;
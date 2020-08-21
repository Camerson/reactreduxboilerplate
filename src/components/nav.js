import React from 'react';
import {Link} from "react-router-dom";

const Nav = props => (
    <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/dynamic/123'}>Dynamic with Slug 123</Link>
        <Link to={'/jsdlkfjsdlkf'}>404 Error Page</Link>
    </nav>
)

export default Nav;

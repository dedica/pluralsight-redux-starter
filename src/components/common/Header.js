import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {  
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">about</Link>
        </nav>  
    );
};

export default Header;
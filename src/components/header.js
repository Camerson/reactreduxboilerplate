import React from 'react';
import {Helmet} from 'react-helmet'

const Header = props => (
    <Helmet>
        <title>{props.title ? props.title : 'No Page Title!'}</title>
    </Helmet>
)

export default Header;

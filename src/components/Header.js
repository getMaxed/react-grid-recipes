import React from 'react';
import styled from 'styled-components';

import img from '../public/img/logo.jpg';

const HeaderWrapper = styled.header`
    padding-top: 3rem;
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;

    img {
        max-width: 100%;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <img src={img} alt="main" />
        </HeaderWrapper>
    );
};

export default Header;

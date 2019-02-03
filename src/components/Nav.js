import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: black;
    margin: 3rem 0;

    nav {
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;
    }

    nav a {
        padding: 1rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
    }

    nav a:hover {
        background-color: #c9c84a;
        color: black;
    }
`;

const Nav = () => {
    return (
        <Wrapper>
            <nav>
                <a href="#">Recipes</a>
                <a href="#">Products</a>
                <a href="#">Tutorials</a>
                <a href="#">Store</a>
            </nav>
        </Wrapper>
    );
};

export default Nav;

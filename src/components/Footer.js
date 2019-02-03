import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
    background-color: #c9c84a;
    padding-top: 3rem;
    text-align: center;

    .container {
        width: 90%;
        max-width: 1100px;
        margin: 0 auto;
    }

    a {
        display: block;
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        color: #525252;
        margin-bottom: 0.5rem;
    }

    p {
        color: white;
        background-color: #282828;
        margin: 3rem 0 0 0;
        padding: 1rem;
        text-align: center;
    }
`;

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="widget">
                    <h3>Recipes</h3>
                    <nav className="menu">
                        <a href="#">Mexican Food</a>
                        <a href="#">Pizzas</a>
                        <a href="#">Desserts</a>
                        <a href="#">Asian cuisine </a>
                        <a href="#">Fast Food</a>
                    </nav>
                </div>
                <div className="widget">
                    <h3>Recipes</h3>
                    <nav className="menu">
                        <a href="#">Mexican Food</a>
                        <a href="#">Pizzas</a>
                        <a href="#">Desserts</a>
                        <a href="#">Asian cuisine </a>
                        <a href="#">Fast Food</a>
                    </nav>
                </div>
                <div className="widget">
                    <h3>Recipes</h3>
                    <nav className="menu">
                        <a href="#">Mexican Food</a>
                        <a href="#">Pizzas</a>
                        <a href="#">Desserts</a>
                        <a href="#">Asian cuisine </a>
                        <a href="#">Fast Food</a>
                    </nav>
                </div>
                <div className="widget">
                    <h3>Recipes</h3>
                    <nav className="menu">
                        <a href="#">Mexican Food</a>
                        <a href="#">Pizzas</a>
                        <a href="#">Desserts</a>
                        <a href="#">Asian cuisine </a>
                        <a href="#">Fast Food</a>
                    </nav>
                </div>
            </div>
            <p>2019 Blog Recipe</p>
        </Wrapper>
    );
};

export default Footer;

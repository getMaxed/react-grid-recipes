import React from 'react';
import styled from 'styled-components';

import FeaturedImage from './components/FeaturedImage';
import Header from './components/Header';
import Nav from './components/Nav';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <FeaturedImage />
            <MainContent />
            <Footer />
            <GlobalStyle />
        </>
    );
};

export default App;

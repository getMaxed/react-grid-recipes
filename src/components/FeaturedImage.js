import React from 'react';
import styled from 'styled-components';

import img from '../public/img/featured-image.jpg';

//

const Wrapper = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;

    img {
        width: 100%;
    }
`;

const FeaturedImage = () => {
    return (
        <Wrapper>
            <img src={img} alt="featured" />
        </Wrapper>
    );
};

export default FeaturedImage;

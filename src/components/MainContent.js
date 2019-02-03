import React from 'react';
import styled from 'styled-components';

import img1 from '../public/img/mini1.jpg';
import img2 from '../public/img/mini2.jpg';

//

const Wrapper = styled.main`
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;

    /* main h1 */

    h1 {
        text-align: center;
        font-family: 'Raleway', sans-serif;
        font-weight: 900;
    }

    /* entry */

    .entry p {
        text-align: justify;
    }

    blockquote {
        font-size: 1.4rem;
        text-align: center;
        font-style: italic;
        color: #525252;
    }

    /* extra-info */
    .extra-info {
        background-color: #c9c84a;
        color: white;
        font-size: 1.4rem;
    }

    .extra-info p {
        margin: 0 0 0.5rem 0;
        padding: 1rem;
        text-align: center;
    }

    .image1,
    .image2 {
        text-align: center;
    }
`;

const MainContent = () => {
    return (
        <Wrapper>
            <h1>Homemade Pizza Recipe</h1>
            <div className="entry">
                <p>
                    Sed neque sapien, rutrum vel elit at, consequat maximus
                    libero. In molestie est odio, eget laoreet dui aliquet sit
                    amet. Proin in hendrerit enim. Etiam blandit quis enim sed
                    facilisis. Cras euismod, sem vel cursus feugiat, metus felis
                    fermentum metus, in vulputate ex enim eget risus. Ut vitae
                    cursus tortor. Aenean ante tellus, venenatis in semper sit
                    amet, iaculis vitae lorem. Proin et aliquet enim. In tempus
                    a lorem vel pretium. Aenean nec laoreet sapien. In placerat
                    odio sit amet convallis rhoncus. Donec varius mollis nisl id
                    pretium. Aenean ac nunc vitae nunc bibendum pharetra. Cras a
                    nulla tellus. Suspendisse et elit sodales, aliquet enim
                    bibendum, venenatis urna. Donec laoreet, elit non imperdiet
                    luctus, nunc nisl commodo quam, ac vulputate leo felis quis
                    metus.
                </p>

                <p>
                    Nulla facilisi. Nullam sed leo leo. Proin ipsum lacus,
                    pharetra non est non, tincidunt elementum orci. Sed volutpat
                    neque id lectus dictum, malesuada ullamcorper urna cursus.
                    Aenean at pellentesque orci, sed tristique sapien. Quisque
                    et nunc pellentesque, cursus quam ut, sollicitudin lorem. Ut
                    egestas mi ante, sit amet consectetur velit fringilla eu.
                    Praesent rhoncus nunc eget ornare tincidunt. Nunc posuere
                    ipsum quis tortor mattis porttitor. Praesent commodo purus
                    vitae fringilla pellentesque. Donec interdum facilisis
                    faucibus. Vestibulum a ex lorem. Duis neque nibh, gravida in
                    euismod non, ullamcorper eget leo. Donec at quam faucibus,
                    accumsan nisl sed, congue purus. Nam at bibendum dui,
                    sollicitudin tempor nisi.
                </p>
                <blockquote>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus musmontes, nascetur ridiculus
                    mus.
                </blockquote>

                <p>
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Nunc eleifend, augue dapibus
                    pharetra facilisis, ligula nunc fringilla nunc, non
                    convallis purus lectus sit amet augue. Nunc luctus sagittis
                    sapien, eu sodales dolor mollis in. Sed sollicitudin maximus
                    ex, ullamcorper tincidunt ligula viverra vel. Donec a
                    aliquet est. Proin at neque nec turpis vulputate eleifend.
                    Sed mollis pharetra aliquet. In eget tempus erat. Nulla
                    facilisi. Quisque iaculis, est id varius sodales, ligula
                    enim lacinia nunc, et pulvinar nisi mi sed diam. Aenean ut
                    enim at odio tristique gravida. Nullam in finibus augue.
                    Cras ac odio at nibh placerat aliquet fermentum sit amet
                    sem. Vivamus condimentum tortor non mi gravida, non volutpat
                    augue consectetur. Quisque vitae mollis risus. Donec eu
                    egestas ipsum, vel rhoncus lorem.
                </p>
            </div>
            <div className="extra-info">
                <p>30 Minutes</p>
                <p>4 People</p>
                <p>$25</p>
            </div>
            <div className="image1">
                <img src={img1} alt="food pic" />
            </div>

            <div className="image2">
                <img src={img2} alt="food pic" />
            </div>
        </Wrapper>
    );
};

export default MainContent;

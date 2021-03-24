import React from 'react';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContentBanner from './images/content-banner.svg';

function BannerLandingPage() {
    return (
        <div className="Background-yellow banner-height">

            <Container>
                <Row className="justify-content-md-center pt-3 ">
                    <img src={ContentBanner} />
                </Row>
            </Container>



        </div>
    );
}

export default BannerLandingPage;

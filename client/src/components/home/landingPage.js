import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

function LandingPage() {
    return (
        <div className="Background-yellow">

            <Alert className="Background-blue">This is Alert form Bootstrap</Alert>
            <Button>Hit me!</Button>
        </div>
    );
}

export default LandingPage;

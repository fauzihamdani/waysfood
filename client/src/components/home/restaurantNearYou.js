import React, { useContext, useEffect, Fragment } from 'react';

import { Container, Row, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { dataRestaurant } from "./dataPopularRestaurant";
import CardRestauranNearYou from './cardRestaurantNearYou';
import PartnerContext from '../../contexts/partner/partnerContext';

function PopularRestaurant() {

    const partnerContext = useContext(PartnerContext);

    const { nearRestaurant, loading, getNearRestaurant } = partnerContext;

    useEffect(() => {
        getNearRestaurant();
    }, []);

    if (loading && nearRestaurant === null) {
        return <h4>There are no Restaurants</h4>;
    }

    return (
        <Fragment>
            {nearRestaurant !== null && !loading
                ?
                (
                    <div className="bg-light pt-5">
                        <Container className=" bg-light">
                            <h1>Restaurant Near You</h1>
                            <Row className="mt-5 pb-5">
                                {nearRestaurant.map(restaurant => (
                                    <div key={restaurant.id}>
                                        <CardRestauranNearYou restaurant={restaurant} />
                                    </div>
                                ))}
                            </Row>
                        </Container>
                    </div >
                )
                :
                <h1> Loading....</h1>
            }
        </Fragment>

    );
}

export default PopularRestaurant;
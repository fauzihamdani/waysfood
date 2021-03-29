import React, { useContext } from 'react';

import { Col, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import PartnerContext from '../../contexts/partner/partnerContext';


const CardPopularRestaurant = ({ restaurant }) => {

    const history = useHistory();
    const { id, fullname, img, distance } = restaurant;
    var imgUser = "https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face.jpeg";

    const partnerContext = useContext(PartnerContext);
    const { getRestaurantId } = partnerContext;

    return (

        <div
            onClick={() => {
                history.push(`/menudetail/${id}`);
                getRestaurantId(id);
            }}
            style={{
                cursor: "pointer",
            }}>
            <Col className="bg-white mr-2">
                <Card className=" mt-3" style={{ height: "221px", width: "245", }}>
                    {img == null
                        ?
                        (<Card.Img className="p-1 card-style" variant="top" src={imgUser} style={{
                            height: "134px",
                            width: "224px",
                            objectFit: "cover",
                        }} />)
                        :
                        (<Card.Img className="p-1 card-style" variant="top" src={img} style={{
                            height: "134px",
                            width: "224px",
                            objectFit: "cover",
                        }} />)
                    }

                    <Card.Body style={{ width: "245", }}>
                        <Card.Title className="text-bold text-small">{fullname}</Card.Title>
                        <Card.Text>
                            {distance}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default CardPopularRestaurant;
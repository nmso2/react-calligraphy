import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';


const ServiceCard = (props) => {
    const { service, cost, img, duration, rating } = props.service;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{service}</Card.Title>
                    <Card.Text>
                        Only $ {cost}
                        <br />
                        Course Duration: {duration}
                        <br />
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol="far fa-star text-warning"
                            fullSymbol="fas fa-star text-warning"
                        />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceCard;
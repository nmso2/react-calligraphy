import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const ServiceCard = (props) => {
    const { service, cost, img, duration } = props.service;
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
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default ServiceCard;
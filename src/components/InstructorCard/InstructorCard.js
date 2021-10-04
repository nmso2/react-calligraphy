import React from 'react';
import { Card } from 'react-bootstrap';

const InstructorCard = (props) => {
    const { name, address, img, phone } = props.instructor;
    return (
        <div>
            <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            Address: {address}
                            <br />
                            Phone: {phone}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default InstructorCard;
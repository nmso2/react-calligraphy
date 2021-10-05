import React from 'react';
import { Card } from 'react-bootstrap';

const AboutCart = (props) => {
    const { name, img, quote} = props.instructor;
console.log(props.instructor)
    return (
        <div>
            <Card className="shadow-lg rounde">
                <Card.Img variant="top" className="p-3" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {quote}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutCart;
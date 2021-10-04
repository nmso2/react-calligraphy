import React from 'react';
import { Card } from 'react-bootstrap';

const Achievement = (props) => {
    return (
        <div>
            <Card>
                    <Card.Body>
                    <i className="fas fa-award text-warning fa-10x"></i>
                        {props.children}
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Achievement;
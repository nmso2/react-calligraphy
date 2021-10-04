import React from 'react';
import { Row } from 'react-bootstrap';
import useInstructor from '../../hooks/useInstructor';
import AboutCart from '../AboutCart/AboutCart';

const About = () => {
    const [instructors, setInstructor] = useInstructor();
    return (
        <div className="mt-5">
            <Row xs={1} md={4} className="g-5 p-5">
                {
                    instructors.slice(0,4).map(instructor => <AboutCart instructor={instructor} key={instructor.id}>
                    </AboutCart>)
                }

            </Row>
        </div>
    );
};

export default About;
import React from 'react';
import { Row } from 'react-bootstrap';
import useInstructor from '../../hooks/useInstructor';
import InstructorCard from '../InstructorCard/InstructorCard';

const Instructor = () => {
    const [instructors, setInstructor] = useInstructor();
    return (
        <div className="mt-5 container-fluid">
            <Row xs={1} md={4} className="g-5 p-5">
                {
                    instructors.map(instructor => <InstructorCard instructor={instructor} key={instructor.id}></InstructorCard>)
                }

            </Row>
        </div>
    );
};

export default Instructor;
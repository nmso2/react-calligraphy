import React from 'react';
import { Row } from 'react-bootstrap';
import useInstructor from '../../hooks/useInstructor';
import AboutCart from '../AboutCart/AboutCart';

const About = () => {
    const [instructors, setInstructor] = useInstructor();
    return (
        <div className="mt-5 pt-5 container-fluid row">
            <div className="col-lg-8 col-12">
                <p className=" display-6 fs-3 text-start">Here you can learn and improve your hand lettering and calligraphy skills. We write and collaborate with talented artists from all over the world in order to bring you the best educational and inspirational content. So far we have split the hand lettering and calligraphy articles in 3 different sections–</p>
                <hr />
                <p className="text-start display-6 fs-3"><span className="h1">Hand lettering tutorials</span><br />
                    In this section, you will be able to learn new skills and techniques. Our tutorials will guide you step-by-step through the process which will instantly improve your lettering skills.</p>

                <hr />
                <p className="text-start display-6 fs-3"><span className="h1">Hand lettering reviews</span><br />
                    Find out more about hand lettering and calligraphy tools, books and online courses. We always recommend only the best!</p>
                <hr />
                <p className="text-start display-6 fs-3"><span className="h1">Hand lettering tips</span><br />
                    Improve your existing skills by implementing nifty and experience-based tips!
                </p>
            </div>

            <div className="col-lg-4 col-12">
                <Row xs={1} md={1} className="g-5 p-5">
                    {
                        instructors.slice(0, 1).map(instructor => <AboutCart instructor={instructor} key={instructor.id}>
                        </AboutCart>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default About;
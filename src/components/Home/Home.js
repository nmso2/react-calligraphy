import React from 'react';
import useService from '../../hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Card, Row } from 'react-bootstrap';
import Achievement from '../Achievement/Achievement';

const Home = () => {
    const [services, setServices] = useService();
    console.log(services);
    return (
        <div className="mt-5 container-fluid">
            <h1 className="mt-5 p-5 pb-0 text-start mb-0">Achievents</h1>
            <Row xs={1} md={3} className="g-4 p-5 pt-2">
                <Achievement>
                    <Card.Title>Best Calligraphy Award 2018</Card.Title>
                    <Card.Text>
                        <p>Won Best Calligraphy award in 2018</p>
                    </Card.Text>
                </Achievement>
                <Achievement>
                    <Card.Title>Best Teaching Award 2017</Card.Title>
                    <Card.Text>
                        <p>Won Best Teaching award in 2018</p>
                    </Card.Text>
                </Achievement>
                <Achievement>
                    <Card.Title>Talent Hunt 2021</Card.Title>
                    <Card.Text>
                        <p>Won Talent Hunt award recently</p>
                    </Card.Text>
                </Achievement>
            </Row>
            <h1 className=" p-5 pb-0 text-start mb-0">Services</h1>
            <Row xs={1} md={4} className="g-4 p-5">
                {
                    services.slice(0, 4).map(service => <ServiceCard service={service} key={service.key}></ServiceCard>)
                }

            </Row>

        </div>
    );
};

export default Home;
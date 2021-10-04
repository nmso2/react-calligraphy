import React from 'react';
import useService from '../../hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Home = () => {
    const [services, setServices] = useService();
    console.log(services);
    return (
        <div className="mt-5">
            <Row xs={1} md={4} className="g-5 p-5">
                {
                    services.slice(0,4).map(service => <ServiceCard service={service} key={service.key}></ServiceCard>)
                }

            </Row>

        </div>
    );
};

export default Home;
import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../hooks/useService';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = (props) => {
    const [services, setServices] = useService();
    return (
        <div className="mt-5">
            <Row xs={1} md={4} className="g-5 p-5">
                {
                    services.map(service => <ServiceCard service={service} key={service.key}></ServiceCard>)
                }

            </Row>
        </div>
    );
};

export default Services;
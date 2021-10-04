import { useEffect, useState } from "react";

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return [services, setServices];
}

export default useService;
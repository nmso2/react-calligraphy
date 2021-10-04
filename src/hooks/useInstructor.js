import { useEffect, useState } from "react";

const useInstructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://nmso2.github.io/fake-data-json/data/writers.json')
            .then(res => res.json())
            .then(data => setInstructor(data));
    }, []);

    return [instructor, setInstructor];
}

export default useInstructor;
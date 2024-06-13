import { useEffect } from "react";
import { useState } from "react";


const Section = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
             
        </div>
    );
};

export default Section;
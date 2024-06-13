import { useEffect } from "react";
import { useState } from "react";


const Section = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setFood(data))
    },[])
    return (
        <div>
             <h1 className="text-3xl font-extrabold">Food:{food.length}</h1>
        </div>
    );
};

export default Section;
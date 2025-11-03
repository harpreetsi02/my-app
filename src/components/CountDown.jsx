import { useState, useEffect } from "react";

const CountDown = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if(count > 0){
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [count]);

    return(
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default CountDown
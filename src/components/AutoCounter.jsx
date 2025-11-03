import { useState, useEffect } from "react";

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => setCount(c => c + 1), 1000)
        return () => clearInterval(timer)
    }, []);

    return(
        <div>
            <h1 className="text-2xl">Auto Counter: {count}</h1>
        </div>
    );
}

export default AutoCounter
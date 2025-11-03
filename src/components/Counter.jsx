import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    return(
        <div className="text-center mt-10">
            <h1 className="text-2xl mb-4">Counter: {count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 mr-4 bg-blue-600 rounded text-white"
            >
                +
            </button>

            <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 ml-4 bg-blue-600 rounded text-white"
            >
                -
            </button>
        </div>  
    );
}

export default Counter
import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // useEffect updates the document title whenever count changes
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return(
        <div className="text-center mt-10">
            <h1 className="font-bold text-3xl mb-4">React useEffect Counter</h1>
            <p className="text-lg mb-4">Current Count: {count}</p>
            <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition duration-800"
            >
                Increment
            </button>
        </div>
    );
}

export default Counter

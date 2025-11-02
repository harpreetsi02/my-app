import { useState, useEffect } from "react";

const Demo = () => {
    const [ count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Changes: ", count);
    },[count]);

    return(
        <div className="text-center mt-10">
            <p className="text-2xl">{count}</p>
            <button
                className="px-4 py-2 rounded bg-blue-600 text-white"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}

export default Demo
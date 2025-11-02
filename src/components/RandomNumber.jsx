import { useState } from "react";

const RandomNumber = () => {
    const [num, setNum] = useState(0);
    return(
        <div className="flex flex-col items-center justify-center mt-10">
            <h1 className="text-2xl mb-4">Random Number: {num}</h1>
            <button
                onClick={() => setNum(Math.floor(Math.random() * 100))}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Generat
            </button>
        </div>
    );
}

export default RandomNumber
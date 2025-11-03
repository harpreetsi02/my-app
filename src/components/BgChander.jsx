import { useState } from "react";

const BgChanger = () => {
    const [color, setColor] = useState("bg-gray-800");
    const colors = ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

    return(
        <div className={`h-screen flex items-center justify-center ${color}`}>
            <button
                onClick={() => setColor(colors[Math.floor(Math.random() * colors.length)])}
                className="text-white text-4xl"
            >
                Random Change
            </button>
        </div>
    );  
}

export default BgChanger
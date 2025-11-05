import { useState, useEffect } from "react";
import Buttons from "./Button";

const AutoBgChanger = () => {
    const [color, setColor] = useState("bg-gray-800");
    const colors = ["bg-red-600", "bg-yellow-600", "bg-green-600", "bg-blue-600"];

    useEffect(() => {
        const interval = setInterval(() => {
            setColor(colors[Math.floor(Math.random() * colors.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className={`h-screen ${color} flex items-center justify-center`}>
        </div>
    );
}

export default AutoBgChanger
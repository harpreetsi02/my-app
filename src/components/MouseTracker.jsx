import { useState, useEffect } from "react";

const MouseTracker = () => {
    const [pos, setPos] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMove = (e) => setPos({x: e.clientX, y: e.clientY});
        window.addEventListener("mouseover", handleMove);
        return () => removeEventListener("mouseover", handleMove);
    }, []);

    return(
        <div className="flex h-screen items-center justify-center">
            <p className="text-4xl">X: {pos.x} Y: {pos.y}</p>
        </div>
    );
}

export default MouseTracker
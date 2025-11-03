import { useState, useEffect } from "react";

const ResizeDetector = () => {
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => removeEventListener("resize", handleResize);
    }, []);

    return(
        <div>
            <p>Window Width: {size}</p>
        </div>
    );
}

export default ResizeDetector
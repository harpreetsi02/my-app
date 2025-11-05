import { useState, useEffect } from "react";

const TypingEffect = () => {
    const text = "Welcome to CodingBolt";
    const [display, setDisplay] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplay(text.slice(0, i++));
            if(i > text.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    },[]);

    return(
        <div>
            {display}
        </div>
    );
}

export default TypingEffect;
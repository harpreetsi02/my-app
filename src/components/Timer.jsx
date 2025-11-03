import { useState, useEffect } from "react";
import Buttons from "./Button.jsx";

const Timer = () => {
    const [second, setSecond] = useState(0);
    const [running, setRuning] = useState(false);

    useEffect(() => {
        if(running) {
            const timer = setInterval(() => setSecond(s => s + 1), 1000);
            return () => clearInterval(timer);
        }
    },[running]);

    return(
        <div className="flex flex-col items-center justify-center mt-10">
            <p className="text-2xl font-semibold mb-6">{second}s</p>
            <div className="flex space-x-3">
                <Buttons
                    onclick={() => setRuning(true)}
                    text="Start"
                />

                <Buttons
                    onclick={() => setRuning(false)}
                    text="Stop"
                /> 
                
                <Buttons
                    onclick={() => {setRuning(false), setSecond(0)}}
                    text="Restart"
                />
            </div>
        </div>
    );
}
export default Timer
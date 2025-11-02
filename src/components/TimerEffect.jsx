import { useEffect } from "react";

const TimerEffect = () => {
    useEffect(() => {
        const timer = setTimeout(() => console.log("3 Second Passed!"), 3000);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        document.title = "Second useEffect";
    }, [])
    return <div>Timer Running</div>
}

export default TimerEffect

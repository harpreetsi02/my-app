import { useState, useEffect } from "react";
import Buttons from "./Button";

const LocalStorageCounter = () => {
    const [count, setCount] = useState(() =>
        Number(localStorage.getItem("count")) || 0);

    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return(
        <div>
            <h1>Count: {count}</h1>
            <Buttons
                onclick={() => setCount(count + 1)}
                text={"+"}
            />
        </div>
    );
}

export default LocalStorageCounter
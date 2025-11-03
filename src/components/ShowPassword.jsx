import { useState } from "react";
import Buttons from "./Button.jsx";

const ShowPassword = () => {
    const [show, setShow] = useState(false);

    return(
        <div>
            <input 
                placeholder="Enter Password..."
                type={show ? "text" : "password"} 
            />
            <Buttons
                onclick={() => setShow(!show)}
                text={"Show"}
            />
        </div>
    );
}

export default ShowPassword
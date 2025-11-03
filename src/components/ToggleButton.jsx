import { useState } from "react";

const ToggleButton = () => {
    const [show, setShow] = useState(true);
    return(
        <div>
            {show && <p>Coding Bolt Academy</p>}
            <button
                onClick={() => setShow(!show)}
            >
                Toggle
            </button>
        </div>
    );
}

export default ToggleButton
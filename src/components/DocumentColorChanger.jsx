import { useState, useEffect } from "react";

const DocumentColorChanger = () => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        document.body.style.backgroundColor = `${dark ? "gray" : "blue"}`;
    }, []);
    return(
        <div>
            <button
                onClick={() => setDark(!dark)}
                className="px-6 py-2 rounded bg-gray-700 text-white"
            >
                Change Background Color
            </button>
        </div>
    );
}

export default DocumentColorChanger
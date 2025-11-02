import { useState } from "react";

const DarkMode = () => {
    const [dark, setDark] = useState(false)
    return(
        <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} text-center mt-10 transition-all`}>
            <button
                onClick={() => setDark(!dark)}
                className="bg-gray-800 rounded px-4 py-2 text-white hover:bg-gray-700 transition-all"
            >
                {dark ? "Switch to Light" : "Switch to Dark"}
            </button>
        </div>
    );
}

export default DarkMode
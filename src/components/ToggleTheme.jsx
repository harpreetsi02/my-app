import { useState } from "react";

const ToggleTheme = () => {
    const [dark, setDark] = useState(true);
    return(
        <div className={`${dark ? "bg-gray-800 text-white" : "bg-amber-50 text-black"} h-screen flex flex-col items-center justify-center`}>
            <h1 className="text-4xl font-semibold mb-6">{dark ? "Dark" : "Light"}</h1>
            <button
                onClick={() => setDark(!dark)}
                className="bg-green-600 hover:bg-green-500 transition-all duration-300 px-6 py-2 rounded text-white"
            >
                Theme Toggle
            </button>
        </div>
    );
}

export default ToggleTheme
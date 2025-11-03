import React from "react";

function Buttons({onclick, text}){
    return(
        <div>
            <button
                onClick={onclick}
                className="bg-blue-500 px-4 py-2 text-white rounded text-sm"
            >
                {text}
            </button>
        </div>
    );
}

export default Buttons
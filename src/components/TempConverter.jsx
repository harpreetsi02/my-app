import { useState } from "react";

const TempConverter = () => {
    const [celsius, setCelsius] = useState("");
    const fahrenheit = celsius ? (celsius * 9/5 + 32).toFixed(2) : "";
    return(
        <div className="text-center mt-10">
            <input 
                type="number"
                value={celsius}
                placeholder="Celsius"
                onChange={(e) => setCelsius(e.target.value)}
                className="border p-2 rounded mr-2"
            />
            <p className="mt-3 text-xl">{fahrenheit && `${fahrenheit}F`}</p>
        </div>
    );
}

export default TempConverter
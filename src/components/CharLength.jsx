import { useState } from "react";

const CharLength = () => {
    const [text, setText] = useState("");
    return(
        <div className="flex items-center justify-center gap-10 mt-10">
            <input 
                className="border rounded px-4 py-2 placeholder:text-sm"
                type="text" 
                placeholder="Type Something..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Character Count: {text.length}</p>
        </div>
    );
}

export default CharLength
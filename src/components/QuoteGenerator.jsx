import { useEffect, useState } from "react";

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");
    const fetchQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuote(data.content));
    };
    useEffect(() => { fetchQuote(); }, []);
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center p-6">
            <p className="text-4xl mb-4 text-white">{quote}</p>

            <button onClick={fetchQuote} className="bg-blue-500 px-4 py-2 rounded">New Quote</button>
        </div>
    );
};

export default QuoteGenerator;
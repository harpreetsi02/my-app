export default function OwnButton({text}){
    return(
        <div>
            <button
                className="px-6 py-2 rounded text-white bg-blue-600"
            >
                {text}
            </button>
        </div>
    );
}
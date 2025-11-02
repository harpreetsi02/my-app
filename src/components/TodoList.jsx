import { useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const addTask = () => {
        if(task.trim() !== ""){
            setList([...list, task]);
            setTask("");
        }
    };
    return(
        <div className="text-center mt-10">
            <input 
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border p-2 mr-2 rounded"
            />

            <button
                onClick={addTask}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Add
            </button>

            <ul className="mt-4 ml-6">
                {list.map((item, index) => 
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    );
}

export default TodoList
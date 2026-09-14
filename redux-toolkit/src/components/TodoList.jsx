import { useDispatch, useSelector } from "react-redux";
import { markDoneTodo, removeTodo, storeUpdateId, unMarkDoneTodo } from "../features/todo/todoSlice";

export default function TodoList(){
    let todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    function handleDelete(id){
        dispatch(removeTodo(id));
    }

    function handleDone(id){
        dispatch(markDoneTodo(id));
    }

    function handleUnDone(id){
        dispatch(unMarkDoneTodo(id));
    }

    function handleUpdate(id){
        let todo = todos.filter((todo) => todo.id === id);
        dispatch(storeUpdateId(id));
    }

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    !todo.isDone && <li key={todo.id} className="w-full shadow-sm p-2 flex justify-between rounded-sm hover:shadow-md m-2">
                        {todo.task}
                        <span>
                            <button onClick={() => handleUpdate(todo.id)} className="bg-green-500 text-white w-28 h-8 rounded-sm">Edit</button>
                            <button onClick={() => handleDelete(todo.id)} className="bg-red-500 text-white w-20 h-8 rounded-sm mx-2">Delete</button>
                            <button onClick={() => handleDone(todo.id)} className="bg-blue-500 text-white w-28 h-8 rounded-sm">Mark Done</button>
                        </span>
                    </li>
                ))}
                <hr />
                {todos.map((todo) => (
                    todo.isDone && <li key={todo.id} className="w-full shadow-sm p-2 flex justify-between rounded-sm m-2 bg-gray-200">
                        {todo.task}
                        <span>
                            <button onClick={() => handleDelete(todo.id)} className="bg-red-500 text-white w-20 h-8 rounded-sm mx-2">Delete</button>
                            <button onClick={() => handleUnDone(todo.id)} className="bg-blue-500 text-white w-28 h-8 rounded-sm">UnMark Done</button>
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}

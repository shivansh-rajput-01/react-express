import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, storeUpdateId } from "../features/todo/todoSlice";

export default function TodoInput(){
    let [input, setInput] = useState("");
    let [update, setUpdate] = useState(false);

    const dispatch = useDispatch();

    function handleSubmit(evt){
        evt.preventDefault();
        if(input.trim() === "") return;
        if(update){
            dispatch(editTodo(input));
            setUpdate(false);
            setInput("");
            dispatch(storeUpdateId(""));
            return;
        }
        dispatch(addTodo(input));
        setInput("");
    }

    let todos = useSelector(state => state.todos);
    let updateTodoId = useSelector(state => state.updateId);

    useEffect(() => {
        let todo = todos.find((todo) => todo.id === updateTodoId);
        if(todo){
            setInput(todo.task);
            setUpdate(true);
        }
    }, [updateTodoId]);

    return (
        <>
            <form onSubmit={handleSubmit} className="m-auto w-1/2 flex justify-around"> 
                <input type="text" placeholder="Enter Todo" value={input} onChange={(e) => setInput(e.target.value)}  className="w-40 h-10 p-1 rounded-sm outline"/>
                {!update && <button className="w-20 h-10 p-1 rounded-sm bg-blue-600 text-white">Add Todo</button>}
                {update && <button className="w-28 h-10 p-1 rounded-sm bg-blue-600 text-white">Update Todo</button>}
            </form>
        </>
    );
}

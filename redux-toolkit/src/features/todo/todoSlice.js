import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: nanoid(),
            task: "sample task",
            isDone: false
        }
    ],
    updateId: "",
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markDoneTodo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.isDone = true;
                }
            })
        },
        unMarkDoneTodo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === action.payload){
                    todo.isDone = false;
                }
            })
        },
        editTodo: (state, action) => {
            state.todos.map((todo) => {
                if(todo.id === state.updateId){
                    todo.task = action.payload;
                }
            })
        },
        storeUpdateId: (state, action) => {
            state.updateId = action.payload;
        },
    }
});

export const {addTodo, removeTodo, markDoneTodo, unMarkDoneTodo, editTodo,  storeUpdateId} = todoSlice.actions;
export default todoSlice.reducer;

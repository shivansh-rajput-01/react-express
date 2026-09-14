import './App.css'
import './index.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="w-1/2 shadow-sm min-h-[50vh] p-4 max-h-screen overflow-y-auto">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App

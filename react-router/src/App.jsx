import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <navbar className="flex justify-around w-screen pr-[50vw] py-4 bg-black text-white">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </navbar>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App

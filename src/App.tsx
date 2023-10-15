import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Register from './pages/Register'
import Home2 from './pages/Home2'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home2 />} />

        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App

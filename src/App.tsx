import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Home2 from './pages/Home2'
import Login from './pages/Login'
import PostDetail from './pages/Postdetail'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Post from './pages/Post'

export default function App(){
  return (
    <BrowserRouter>
      <div style={{minHeight:'100vh', background:'#f5f5f5'}}>
        <header style={{padding:16, background:'#fff', boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
          <div style={{maxWidth:900, margin:'0 auto', display:'flex', justifyContent:'space-between'}}>
            <Link to="/" style={{fontWeight:'bold'}}>nhat123.fun</Link>
            <nav>
              <Link to="/login" style={{marginRight:12}}>Login</Link>
              <Link to="/new">New Post</Link>
            </nav>
          </div>
        </header>
        <main style={{maxWidth:900, margin:'0 auto', padding:16}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Auth/>} />
            <Route path="/posts/:id" element={<Post/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

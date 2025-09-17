import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{ fetch('/api/posts').then(r=>r.json()).then(setPosts).catch(()=>{}) },[])
  return (
    <div>
      <h2 style={{fontSize:20, marginBottom:12}}>Bài mới</h2>
      {posts.map(p=>(
        <article key={p.id} style={{marginBottom:12,padding:12,background:'#fff',borderRadius:8}}>
          <h3><Link to={`/posts/${p.id}`}>{p.title}</Link></h3>
          <p style={{color:'#555'}}>{p.excerpt}</p>
          <small style={{color:'#888'}}>{p.author} • {new Date(p.created_at).toLocaleString()}</small>
        </article>
      ))}
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Post(){
  const { id } = useParams()
  const [data,setData] = useState(null)
  const [comment,setComment] = useState('')
  useEffect(()=>{ fetch(`/api/posts/${id}`).then(r=>r.json()).then(setData).catch(()=>{}) },[id])
  const doComment = async ()=>{
    const token = localStorage.getItem('token')
    if(!token) return alert('login required')
    await fetch(`/api/posts/${id}/comments`, { method:'POST', headers:{'Content-Type':'application/json','Authorization':'Bearer '+token}, body:JSON.stringify({ body: comment }) })
    alert('sent')
  }
  if(!data) return <div>Loading...</div>
  return (
    <div>
      <h2>{data.post.title}</h2>
      <div style={{color:'#666',marginBottom:12}}>by {data.post.author}</div>
      <div style={{whiteSpace:'pre-wrap',marginBottom:20}}>{data.post.body}</div>

      <h3>Comments</h3>
      <div>
        {data.comments && data.comments.map(c=>(
          <div key={c.id} style={{padding:8,background:'#f7f7f7',borderRadius:6,marginBottom:8}}>
            <div style={{fontSize:13, color:'#333'}}><strong>{c.author}</strong></div>
            <div style={{fontSize:13}}>{c.body}</div>
          </div>
        ))}
      </div>

      <div style={{marginTop:12}}>
        <textarea value={comment} onChange={e=>setComment(e.target.value)} rows={3} style={{width:'100%'}} />
        <button onClick={doComment} style={{marginTop:8,background:'#1f6feb',color:'#fff',padding:'8px 12px',borderRadius:6}}>Send</button>
      </div>
    </div>
  )
}

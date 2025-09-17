import React, { useState } from 'react'

export default function Auth(){
  const [user,setUser] = useState({username:'',password:''})
  const onLogin = async ()=>{
    const r = await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(user)})
    const j = await r.json()
    if(j.token) localStorage.setItem('token', j.token)
    alert(r.ok ? 'Đăng nhập thành công' : JSON.stringify(j))
  }
  return (
    <div style={{maxWidth:480,margin:'0 auto'}}>
      <h2 style={{fontSize:18, marginBottom:12}}>Login</h2>
      <input style={{display:'block',width:'100%',marginBottom:8,padding:8}} placeholder="username" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} />
      <input style={{display:'block',width:'100%',marginBottom:8,padding:8}} placeholder="password" type="password" value={user.password} onChange={e=>setUser({...user,password:e.target.value})} />
      <button onClick={onLogin} style={{padding:'8px 12px',background:'#1f6feb',color:'#fff',borderRadius:6}}>Login</button>
    </div>
  )
}

import React from 'react'
export default function Skills(){
const skills = ['React','JavaScript','CSS Animations','HTML','Git','Three.js']
return (
<div>
<h2>Skills</h2>
<div style={{display:'flex',gap:12,flexWrap:'wrap',justifyContent:'center',marginTop:18}}>
{skills.map(s=> (
<div key={s} style={{padding:'10px 14px',borderRadius:10,background:'rgba(255,255,255,0.02)',border:'1px solid rgba(140,0,255,0.06)'}}>{s}</div>
))}
</div>
</div>
)
}
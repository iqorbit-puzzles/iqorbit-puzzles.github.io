
import React from 'react'

type Props = { title: string; description: string; color: string; onClick?: () => void }
export default function TypeCard({ title, description, color, onClick }: Props){
  return (
    <button onClick={onClick} className="card" style={{ borderColor: color, textAlign:'left', width:'100%'}}>
      <span className="badge" style={{ borderColor: color }}>
        <span style={{width:8,height:8,borderRadius:4,background:color,display:'inline-block'}} />
        <strong style={{color}}>{title}</strong>
      </span>
      <div style={{fontSize:20,fontWeight:800,marginBottom:6}}>{title}</div>
      <div className="small">{description}</div>
    </button>
  )
}

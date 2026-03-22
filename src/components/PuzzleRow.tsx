
import React from 'react'

type Props = { title: string; difficulty: string; color: string; onClick?: () => void }
export default function PuzzleRow({ title, difficulty, color, onClick }: Props){
  return (
    <button onClick={onClick} className="card" style={{borderColor:color,display:'flex',gap:12,alignItems:'center',width:'100%'}}>
      <div style={{flex:1}}>
        <div style={{fontSize:16,fontWeight:800,marginBottom:4}}>{title}</div>
        <div className="small">Tap to solve</div>
      </div>
      <span className="pill" style={{borderColor:color,color:'#fff'}}>{difficulty}</span>
    </button>
  )
}

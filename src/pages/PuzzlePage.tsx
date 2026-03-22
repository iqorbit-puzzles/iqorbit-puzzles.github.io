
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPuzzleById, getTypeById } from '../data/puzzles'

export default function PuzzlePage(){
  const { puzzleId } = useParams()
  const nav = useNavigate()
  const puzzle = puzzleId ? getPuzzleById(puzzleId) : undefined
  const type = puzzle ? getTypeById(puzzle.typeId) : undefined
  const [revealed, setRevealed] = useState(false)
  const [hintIndex, setHintIndex] = useState(0)

  if(!puzzle || !type) return <div className="container">Puzzle not found.</div>

  return (
    <div className="container">
      <a className="link" onClick={() => nav(-1)}>{'‹ Back'}</a>

      <div className="card" style={{borderColor:type.color, marginTop:10, marginBottom:14}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div style={{fontSize:22,fontWeight:900}}>{puzzle.title}</div>
          <span className="pill" style={{borderColor:type.color,color:'#fff'}}>{puzzle.difficulty}</span>
        </div>
        <div className="small" style={{color:type.color, marginTop:4,fontWeight:800,letterSpacing:1}}>{type.title}</div>
      </div>

      <div className="card" style={{borderColor:type.color, marginBottom:14}}>
        <div style={{fontSize:14,fontWeight:800,marginBottom:10,letterSpacing:.3}}>Puzzle</div>
        <div style={{fontSize:16,lineHeight:'22px'}}>{puzzle.statement}</div>
      </div>

      {puzzle.hints && (
        <div className="card" style={{borderColor:'#264166', marginBottom:14}}>
          <div style={{fontSize:14,fontWeight:800,marginBottom:10,letterSpacing:.3}}>Hints</div>
          {puzzle.hints.slice(0,hintIndex).map((h,idx)=>(
            <div key={idx} className="small">• {h}</div>
          ))}
          {hintIndex < puzzle.hints.length && (
            <button className="btn" style={{borderColor:'#385a8a', color:'#cfe0ff', marginTop:6}} onClick={()=>setHintIndex(i=>Math.min(i+1, puzzle.hints!.length))}>Show hint</button>
          )}
        </div>
      )}

      <div className="card" style={{borderColor: revealed ? type.color : '#3a3f64'}}>
        <div style={{fontSize:14,fontWeight:800,marginBottom:10,letterSpacing:.3}}>Solution</div>
        {revealed ? (
          <div style={{fontSize:16,lineHeight:'22px', color:'#c2ffe9'}}>{puzzle.solution}</div>
        ):(
          <button className="btn" style={{borderColor:type.color}} onClick={()=>setRevealed(true)}>Reveal Answer</button>
        )}
      </div>
    </div>
  )
}

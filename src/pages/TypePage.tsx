
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTypeById, getPuzzlesByType } from '../data/puzzles'
import PuzzleRow from '../components/PuzzleRow'

export default function TypePage(){
  const { typeId } = useParams()
  const nav = useNavigate()
  const type = typeId ? getTypeById(typeId) : undefined
  const puzzles = typeId ? getPuzzlesByType(typeId) : []
  if(!type) return <div className="container">Type not found.</div>
  return (
    <div className="container">
      <a className="link" onClick={() => nav(-1)}>{'‹ Back'}</a>
      <div className="title" style={{marginTop:6}}>{type.title}</div>
      <div className="subtitle" style={{marginTop:6}}>{type.description}</div>
      <div style={{height:14}} />
      {puzzles.map(p => (
        <div style={{marginBottom:12}} key={p.id}>
          <PuzzleRow title={p.title} difficulty={p.difficulty} color={type.color} onClick={() => nav(`/puzzle/${p.id}`)} />
        </div>
      ))}
    </div>
  )
}

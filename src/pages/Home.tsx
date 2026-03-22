
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PUZZLE_TYPES } from '../data/puzzles'
import TypeCard from '../components/TypeCard'

export default function Home(){
  const nav = useNavigate()
  return (
    <div className="container">
      <div className="title">Choose Puzzle Type</div>
      <div className="subtitle">Start with any category. New puzzles can be added anytime.</div>
      <div className="grid cols-2" style={{marginTop:16}}>
        {PUZZLE_TYPES.map(t => (
          <TypeCard key={t.id} title={t.title} description={t.description} color={t.color} onClick={() => nav(`/type/${t.id}`)} />
        ))}
      </div>
    </div>
  )
}

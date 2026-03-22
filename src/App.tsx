
import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import TypePage from './pages/TypePage'
import PuzzlePage from './pages/PuzzlePage'

function RedirectFrom404(){
  // If we arrived via public/404.html, it encodes the original path in ?p=
  const nav = useNavigate()
  const loc = useLocation()
  useEffect(()=>{
    const p = new URLSearchParams(loc.search).get('p')
    if(p){ nav(p, {replace:true}) }
  },[])
  return null
}

export default function App(){
  return (
    <>
      <RedirectFrom404 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/type/:typeId" element={<TypePage />} />
        <Route path="/puzzle/:puzzleId" element={<PuzzlePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

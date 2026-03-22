
import React from 'react'
export default function Pill({ children, color="#32406b" }: {children: React.ReactNode, color?: string}){
  return <span className="pill" style={{borderColor: color, color:'#fff'}}>{children}</span>
}

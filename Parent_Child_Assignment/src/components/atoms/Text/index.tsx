import React from 'react'

export default function index(props) {
  return (
    <div>
      <span style={{fontSize:props.size}}>{props.text}</span>
    </div>
  )
}

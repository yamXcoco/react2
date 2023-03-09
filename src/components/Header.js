import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <h1>👩 My Note</h1>
      </Link>
      <Link to={'/Write'}>
        <button>글쓰기</button>
      </Link>
    </div>
  )
}

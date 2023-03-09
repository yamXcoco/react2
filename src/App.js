import { useState } from 'react'
import Header from './components/Header'
import NoteList from './components/NoteList'
import Write from './components/Write'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

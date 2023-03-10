import { useEffect, useState } from 'react'
import Note from './Note'
import { db } from '../firebase'

export default function NoteList() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    console.log(db)
  }, [])

  return (
    <ul className="list">
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  )
}

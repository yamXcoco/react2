// import db from '../db/data.json'
import { useEffect, useState } from 'react'
import Note from './Note'
//데이터 불러오기

// json fatch사용해서 데이터 불러오기 (readme 참고)
export default function NoteList() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
  }, [])

  return (
    <ul className="list">
      {notes.map((note) => (
        <Note note={note} key={note.id} />
        // 원래 li note였던 것 데이터 파일 관리를 위해 note.js파일로 만들었음 노트를 태그하고 값이랑 아이디도 함께 불러와서 넘겨줌
      ))}
    </ul>
  )
}

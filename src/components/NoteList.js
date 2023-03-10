import { useEffect, useState } from 'react'
import Note from './Note'
import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'

export default function NoteList() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'notes'), orderBy('date', 'desc'))
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const items = []
      querySnapshot.forEach(doc => {
        items.push({
          ...doc.data(),
          //만들어둔 문서 가져오기
          id: doc.id,
          //지정한 자동생성 아이디도 가져오기
        })
      })
      // console.log(items)
      setNotes(items)
    })
    return () => unsubscribe()
  }, [])

  return (
    <ul className="list">
      {notes.map(note => (
        <Note note={note} key={note.id} />
      ))}
    </ul>
  )
}

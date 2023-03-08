import db from '../db/data.json'
import React from 'react'
import Note from './Note'
//데이터 불러오기

export default function NoteList() {
  return (
    <ul className="list">
      {db.notes.map((note) => (
        <Note note={note} key={note.id} />
      ))}
      {/* 리스트 데이터 다시 note.js로 옯기기 노트 값이랑 아이디도 같이 넘기기 */}
    </ul>
  )
}

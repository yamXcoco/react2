import React from 'react'
import { MdEdit, MdDelete } from 'react-icons/md'
// 리액트 아이콘 사용하기
// npm install react-icons
export default function note({ note }) {
  //노트 데이터 주기
  return (
    <li className="note">
      {/* 원래 여기에key={note.id}가 있었음 */}
      <h4 className="title">{note.title}</h4>
      <p>{note.detail}</p>
      <div className="bottom">
        <div className="date">{note.date}</div>
        <div className="btns">
          <MdEdit />
          <MdDelete />
        </div>
      </div>
    </li>
  )
}

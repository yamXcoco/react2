import { useState } from 'react'
import { MdMode, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import moment from 'moment'
import 'moment/locale/ko'

export default function Note({ note }) {
  const date = moment(note.date.toDate()).format('YYYY-MM-D h:mm')

  async function onDelete() {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await deleteDoc(doc(db, 'notes', note.id))
    }
  }
  //노트 삭제
  return (
    <li className="note">
      <h4 className="title">{note.title}</h4>
      <p>{note.detail}</p>
      <div className="bottom">
        <div className="date">{date}</div>
        <div className="btns">
          <span>
            <Link to={'/edit'} state={note}>
              <MdMode />
            </Link>
          </span>
          <span>
            <MdDelete onClick={onDelete} />
          </span>
        </div>
      </div>
    </li>
  )
}

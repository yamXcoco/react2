import { useState } from 'react'
import { MdMode, MdDelete } from 'react-icons/md'

export default function Note({ note }) {
  const [screen, setScreen] = useState(false)

  function onDelete() {
    fetch(`http://localhost:3001/notes/${note.id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        setScreen(true)
      }
    })
  }

  if (screen === true) {
    return null
  }

  return (
    <li className="note">
      <h4 className="title">{note.title}</h4>
      <p>{note.detail}</p>
      <div className="bottom">
        <div className="date">{note.date}</div>
        <div className="btns">
          <span>
            <MdMode />
          </span>
          <span>
            <MdDelete onClick={onDelete} />
          </span>
        </div>
      </div>
    </li>
  )
}

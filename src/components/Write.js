import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function Write() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const detailRef = useRef()

  async function onWrite(e) {
    e.preventDefault()
    //새로고침방지
    // console.log(titleRef.current.value)
    // console.log(detailRef.current.value)

    const docRef = await addDoc(collection(db, 'notes'), {
      //await는 함수 앞에 async 필수
      title: titleRef.current.value,
      detail: detailRef.current.value,
      date: serverTimestamp(),
      //serverTimestamp 임포트에도 추가
    })
    navigate('/')
  }

  function goBack(e) {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <div className="container">
      <h2>노트작성</h2>
      <form>
        <div>
          <label>제목</label>
          <input type="text" placeholder="제목" ref={titleRef} />
        </div>
        <div>
          <label>내용</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="내용"
            ref={detailRef}
          ></textarea>
        </div>
        <div>
          <button onClick={goBack}>취소하기</button>
          <button onClick={onWrite}>작성하기</button>
        </div>
      </form>
    </div>
  )
}

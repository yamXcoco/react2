import { useRef } from 'react'
import moment from 'moment/moment'
import 'moment/locale/ko'
import { useNavigate } from 'react-router-dom'

export default function Write() {
  const navigate = useNavigate()
  const titleRef = useRef()
  const detailRef = useRef()

  function onWrite(e) {
    e.preventDefault()
    //새로고침방지
    console.log(titleRef.current.value)
    console.log(detailRef.current.value)

    fetch('http://localhost:3001/notes', {
      //시간순서에 따라 정렬(?_sort=date&_order=desc)
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleRef.current.value,
        detail: detailRef.current.value,
        date: moment().format('YYYY년 MMMM Do, h:mm:ss'),
      }),
    }).then((res) => {
      if (res.ok) {
        navigate('/')
        // 다끝내고 원래페이지(/)로 넘어가자
      }
    })
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
          <button>취소하기</button>
          <button onClick={onWrite}>작성하기</button>
        </div>
      </form>
    </div>
  )
}

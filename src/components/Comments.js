import React from 'react'
import '../App.css'
import UserInfo from './UserInfo'

function Comments({data}) {
  return (
    <div className="comment">
    <UserInfo author={data.author}/>
    <div className="comment-text">
      {data.text}
    </div>
    <div className="comment-date">
      {data.date}
    </div>
  </div>
  )
}

export default Comments

import React from 'react'

function UserInfo({author}) {
  return (
   
    <div className="comment-user">
      <div className="comment-user__avatar"></div>
        <div className="comment-user__name">
          {author.name}
        </div>
    </div>

  )
}

export default UserInfo

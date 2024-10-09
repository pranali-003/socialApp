import './Closefriend.css'
import React from 'react'

const Closefriend = ({user}) => {
  return (
    <div>
      <li  className="sidebarFriend">
            <img src={user.profilePicture} alt="not found" className="sidebarFriendImg" />
            <span className='sidebarFriendName'> {user.username}</span>
          </li>
    </div>
  )
}

export default Closefriend

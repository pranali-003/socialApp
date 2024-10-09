import './Online.css'

const Online = ({user}) => {
  return (
    <div>
      <li className="rightbarFriend">
            <div className="rigthbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
              <span className='rightbarOnline'></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
    </div>
  )
}

export default Online

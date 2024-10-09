import './Rightbar.css'
import {Users} from '../../data'
import Online from '../online/Online'


const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="gift.png" alt="" className="birthdayImg" />
          <span className='birthdayText'>
            {" "}
           <b> Pla Fotser</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>{
            return <Online key={u.id} user={u}/>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar

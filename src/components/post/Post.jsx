import React,{useState} from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../data'

const Post = ({post}) => {

const [like,setLike] = useState(post.like)  
const [isLiked,setIsLiked]=useState(false);


const likeHandler = ()=>{
  setLike(isLiked ? like-1 : like+1);
  setIsLiked(!isLiked);
}
  return (
    <div>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className='postProfileImg'src={Users.filter((u)=>u.id === post.userId)[0].profilePicture} alt="" />
              <span className='postUsername'>{Users.filter((u)=>u.id === post.userId)[0].username}</span>
              <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVertIcon/>
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="not found" className="postImg" />
          </div>
          <div className="postBottom">
              <div className="postBottomLeft">
                <img className='likeIcon' src="like.png" onClick={likeHandler} alt="" />
                <img  className ='heartIcon'onClick={likeHandler}  src="heart.png" alt="" />
                <span className='postLikeCounter'>{like} people Liked it</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post

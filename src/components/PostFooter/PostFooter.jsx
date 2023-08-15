import { useState } from 'react';
import './PostFooter.scss';

const PostFooter = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  return (
    <div className="postFooter">
      <div className="likeAndCommentWrap">
        <div className="likeText">좋아요</div>
        <div className="likeCount">{likeCount}</div>
        <div className="commentText">댓글</div>
        <div className="commentCount">{commentCount}</div>
      </div>
      <div className="likeButton">
        <img src="/images/State=Default-3.png" alt="좋아요" />
      </div>
    </div>
  );
};

export default PostFooter;

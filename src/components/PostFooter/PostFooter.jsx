import { useEffect, useState } from 'react';
import HeartButton from '../HeartButton/HeartButton';
import './PostFooter.scss';

const PostFooter = props => {
  const [like, setLike] = useState(true);

  const toggleLike = e => {
    setLike(!like);
  };

  // useEffect(() => {
  // fetch('/data/data.json',{
  //   method: "POST",
  //   header: {
  //     "Contest-Type": "",
  //   },
  //   body: JSON.stringify({
  //     like
  //   })
  // })

  //   like ? (props.likeCount += 1) : (props.likeCount -= 1);
  // }, [like]);

  return (
    <div className="postFooter">
      <div className="likeAndCommentWrap">
        <div className="likeText">좋아요</div>
        <div className="likeCount">{props.likeCount}</div>
        <div className="commentText">댓글</div>
        <div className="commentCount">{props.commentCount}</div>
      </div>
      <div className="likeButton">
        <HeartButton like={like} onClick={toggleLike} />
      </div>
    </div>
  );
};

export default PostFooter;

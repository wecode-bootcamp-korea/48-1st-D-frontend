import { useEffect, useState } from 'react';
import HeartButton from '../HeartButton/HeartButton';
import './PostFooter.scss';

const PostFooter = props => {
  const [like, setLike] = useState(false);

  const toggleLike = e => {
    setLike(!like);
  };

  {
    like
      ? fetch('/data/data.json', {
          method: 'POST',
          header: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('access_token'),
          },
          body: JSON.stringify({
            userId: {
              /*토큰의 유저Id 값*/
            },
          }),
        })
      : fetch('/data/data.json', {
          method: 'DELETE',
          header: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('access_token'),
          },
          body: JSON.stringify({
            userId: {
              /*토큰의 유저Id 값*/
            },
          }),
        });
  }

  {
    /*TODO 좋아요 개수 DB에서 받아오기*/
  }
  return (
    <div className="postFooter">
      <div className="likeAndCommentWrap">
        <div className="likeText">좋아요</div>
        <div className="likeCount">{props.likeCount}</div>
        <div className="commentText">댓글</div>
        <div className="commentCount">{props.commentCount.length}</div>
      </div>
      <div className="likeButton">
        <HeartButton like={like} onClick={toggleLike} />
      </div>
    </div>
  );
};

export default PostFooter;

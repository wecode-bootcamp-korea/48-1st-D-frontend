import { useEffect, useState } from 'react';
import HeartButton from '../HeartButton/HeartButton';
import './PostFooter.scss';

const PostFooter = props => {
  const [like, setLike] = useState(props.isLiked);
  const [likeCount, setLikeCount] = useState(props.likeCount);

  const toggleLike = e => {
    setLike(prev => {
      !prev
        ? fetch('/data/data.json', {
            method: 'POST',
            header: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: localStorage.getItem('access_token'),
            },
            body: JSON.stringify({}),
          })
            /* 서버 응답 오류시 이전 UI로 변경 */
            .then(res => {
              if (!res.ok) {
                throw Error('like failed');
              }
            })
            .catch(() => {
              setLikeCount(prev => prev - 1);
              setLike(prev);
              return;
            })
        : fetch('/data/data.json', {
            method: 'DELETE',
            header: {
              'Content-Type': 'application/json;charset=utf-8',
              Authorization: localStorage.getItem('access_token'),
            },
            body: JSON.stringify({}),
          })
            .then(res => {
              if (!res.ok) {
                throw Error('unlike failed');
              }
            })
            .catch(() => {
              setLikeCount(prev => prev + 1);
              setLike(prev);
              return;
            });

      {
        !prev ? setLikeCount(prev => prev + 1) : setLikeCount(prev => prev - 1);
      }
      return !prev;
    });
  };

  return (
    <div className="postFooter">
      <div className="likeAndCommentWrap">
        <div className="likeText">좋아요</div>
        <div className="likeCount">{likeCount}</div>
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

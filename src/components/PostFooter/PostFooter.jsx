import { useEffect, useState, useRef } from 'react';
import HeartButton from '../HeartButton/HeartButton';
import './PostFooter.scss';

const PostFooter = props => {
  const [like, setLike] = useState(props.isLiked);

  const toggleLike = e => {
    setLike(prev => !prev);
  };

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, deps);
  };

  useDidMountEffect(() => {
    like
      ? fetch('/data/data.json', {
          method: 'POST',
          header: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('access_token'),
          },
          body: JSON.stringify({}),
        })
      : fetch('/data/data.json', {
          method: 'DELETE',
          header: {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: localStorage.getItem('access_token'),
          },
          body: JSON.stringify({}),
        });
  }, [like]);

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

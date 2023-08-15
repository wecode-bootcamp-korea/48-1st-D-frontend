import { useEffect, useState } from 'react';
import HeartButton from '../HeartButton/HeartButton';
import './PostFooter.scss';

const PostFooter = props => {
  const [like, setLike] = useState(false);

  const toggleLike = e => {
    setLike(!like);
  };

  // useEffect(() => {

  //   fetch('/data/data.json', {
  //     method: 'POST',
  //     header: {
  //       'Contest-Type': '',
  //     },
  //     body: JSON.stringify({
  //       isLike: like,
  //     }),
  //   })

  //   .then((res) => {return res.json()})
  //   .then((data) => {
  //     const fetchData = () => {
  //       if (isLike === true) setLike(true)}
  //       fetchData();
  //   })

  //   },[]);

  //   like ? (props.likeCount += 1) : (props.likeCount -= 1);
  // }, [like]);

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

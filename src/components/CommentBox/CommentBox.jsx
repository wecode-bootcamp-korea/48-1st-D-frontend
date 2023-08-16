import React, { useEffect, useState } from 'react';
import './CommentBox.scss';

const commentDelete = () => {
  fetch('/data/data.json', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      // Authorization: localStorage.getItem('access_token'),
    },
  }).then(res => {
    if (res.ok) {
      alert('삭제되었습니다!');
      return;
    }
    // if (!res.ok) {
    //   throw new Error('Error');
    // }
  });
};

const CommentBox = props => {
  const [commentDataValue, setcommentDataValue] = useState({
    inputComment: '',
    nickName: '',
  });

  const handleInput = e => {
    const { value, nickName } = e.target;
    setcommentDataValue({
      ...commentDataValue,
      inputComment: value,
      nickName: '',
    });
  };

  const addToCommentData = () => {
    fetch('/data/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      },
      body: JSON.stringify({
        comment: commentDataValue.inputComment,
        nickName: commentDataValue.nickName,
      }),
    });
  };

  return (
    <div className="commentBox">
      <div className="commentInputBox">
        <input
          type="text"
          className="commentInput"
          placeholder="댓글을 작성해주세요."
          onChange={handleInput}
        ></input>
        <button className="commentAddToListButton" onClick={addToCommentData}>
          댓글 게시
        </button>
      </div>
      <CommentList comments={props.comments} />
    </div>
  );
};

const CommentList = props => {
  return (
    <div className="commentList">
      {props.comments.map(comment => {
        return <CommentWrap comment={comment} key={comment.commentId} />;
      })}
    </div>
  );
};

const CommentWrap = props => {
  const dateString = props.comment.createdAt;
  const dateObject = new Date(dateString);

  return (
    <div className="commentWrap">
      <div className="commentUserProfileBox">
        <img src="/images/Default-userprofileimage.png" alt="프로필이미지" />
      </div>
      <div className="commentRightBox">
        <div className="commentuserInfo">
          <div className="commentNickName">{props.comment.nickName}</div>
          <div className="commentDeleteCreatedAtWrap">
            <div className="commentCreatedAt">
              {dateObject.getFullYear()}.{dateObject.getMonth() + 1}.
              {dateObject.getDate()}
            </div>
            {props.userId ==
              {
                /*토큰의 유저id*/
              } && (
              <div className="commentDelete" onClick={commentDelete}>
                삭제
              </div>
            )}
          </div>
        </div>
        <div className="comment">{props.comment.comment}</div>
      </div>
    </div>
  );
};
export default CommentBox;

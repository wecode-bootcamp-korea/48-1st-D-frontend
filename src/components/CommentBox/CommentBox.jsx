import React, { useState } from 'react';
import './CommentBox.scss';

const commentDelete = () => {
  if (window.confirm('정말 삭제하시겠습니까?')) {
    fetch('/data/data.json', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => {
        if (res.ok) {
          alert('삭제되었습니다!');
          return;
        }
        if (!res.ok) {
          throw new Error('Error');
        }
      })
      .catch(() => {
        alert('삭제에 실..패..했습니다....');
      });
  }
};

const CommentBox = props => {
  const [commentDataValue, setcommentDataValue] = useState({
    inputComment: '',
    userName: '',
  });

  const handleInput = e => {
    const { value, userName } = e.target;
    setcommentDataValue({
      ...commentDataValue,
      inputComment: value,
      userName: '',
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
      //TODO api 업데이트 후 적용
      body: JSON.stringify({
        comment: commentDataValue.inputComment,
        userName: commentDataValue.userName,
      }),
    })
      .then(res => {
        if (res.ok) {
          props.fetchPost();
          return;
        }
        if (!res.ok) {
          throw new Error('Error');
        }
      })

      .catch(() => {
        alert('댓글 달기에 실패하였습니다');
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
        />
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
        return (
          <CommentWrap
            comment={comment}
            key={comment.commentId}
            userName={comment.userName}
            isMyReply={comment.isMyReply}
          />
        );
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
          <div className="commentUserName">{props.comment.userName}</div>
          <div className="commentDeleteCreatedAtWrap">
            <div className="commentCreatedAt">
              {dateObject.getFullYear()}.{dateObject.getMonth() + 1}.
              {dateObject.getDate()}
            </div>
            {props.isMyReply && (
              <>
                <div className="commentDelete" onClick={commentDelete}>
                  삭제
                </div>
              </>
            )}
          </div>
        </div>
        <div className="comment">{props.comment.comment}</div>
      </div>
    </div>
  );
};
export default CommentBox;

import React, { useEffect, useState } from 'react';
import './CommentBox.scss';

const CommentBox = props => {
  return (
    <div className="commentBox">
      <div className="commentInputBox">
        <input
          type="text"
          className="commentInput"
          placeholder="댓글을 작성해주세요."
        ></input>
        <button className="commentAddToListButton">댓글 게시</button>
      </div>
      <CommentList comments={props.comments} />
    </div>
  );
};
const CommentList = props => {
  return (
    <div className="commentList">
      {props.comments.map(comment => {
        return <CommentWrap comment={comment} />;
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
      <div className="zzz">
        <div className="commentuserInfo">
          <div className="commentUserName">{props.comment.userName}</div>
          <div className="commentDeleteCreatedAtWrap">
            <div className="commentCreatedAt">
              {dateObject.getFullYear()}.{dateObject.getMonth() + 1}.
              {dateObject.getDate()}
            </div>
            <div className="commentDelete">삭제</div>
          </div>
        </div>
        <div className="comment">{props.comment.comment}</div>
      </div>
    </div>
  );
};
export default CommentBox;

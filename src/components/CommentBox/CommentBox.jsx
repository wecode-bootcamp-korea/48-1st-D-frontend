import React, { useEffect, useState } from 'react';
import './CommentBox.scss';

const CommentBox = () => {
  return (
    <div className="commentBox">
      <div className="commentInputBox">
        <input type="text" className="commentInput"></input>
        <button className="commentAddToList">댓글 게시</button>
      </div>
      <CommentList />
    </div>
  );
};
const CommentList = () => {
  return (
    <div className="commentList">
      <div>글글글</div>
      <div>글글글</div>
      <div>글글글</div>
      <div>글글글</div>
      <div>글글글</div>
      <div>글글글</div>
      <div>글글글</div>
    </div>
  );
};
export default CommentBox;

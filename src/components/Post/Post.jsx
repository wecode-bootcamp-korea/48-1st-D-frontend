import { useState } from 'react';
import PostHeader from '../../components/PostHeader/PostHeader';
import PostContent from '../../components/PostContent/PostContent';
import PostFooter from '../../components/PostFooter/PostFooter';
import CommentBox from '../../components/CommentBox/CommentBox';
import './Post.scss';

const Post = props => {
  return (
    <div className="post">
      <PostHeader
        fetchPost={props.fetchPost}
        postId={props.postData.postId}
        userName={props.postData.userName}
        createdAt={props.postData.createdAt}
        isMyPost={props.postData.isMyPost}
      />
      <PostContent
        postId={props.postData.postId}
        content={props.postData.content}
        onClickPostContent={props.onClickPostContent}
      />
      <PostFooter
        isLiked={props.postData.isLiked}
        userId={props.postData.usrId}
        likeCount={props.postData.likeCount}
        commentCount={props.postData.comments}
      />
      {props.isFocused && (
        <CommentBox
          userName={props.postData.userName}
          comments={props.postData.comments}
          commentId={props.postData.comments.commentId}
          isMyReply={props.postData.comments.isMyReply}
        />
      )}
    </div>
  );
};

export default Post;

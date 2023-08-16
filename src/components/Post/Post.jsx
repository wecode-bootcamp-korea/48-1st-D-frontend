import { useState } from 'react';
import PostHeader from '../../components/PostHeader/PostHeader';
import PostContent from '../../components/PostContent/PostContent';
import PostFooter from '../../components/PostFooter/PostFooter';
import CommentBox from '../../components/CommentBox/CommentBox';
import './Post.scss';

const Post = props => {
  const [contentToggle, setContentToggle] = useState(false);

  return (
    <div className="post">
      <PostHeader
        postId={props.postData.postId}
        userName={props.postData.userName}
        createdAt={props.postData.createdAt}
        isMyPost={props.postData.isMyPost}
      />
      <PostContent
        content={props.postData.content}
        contentToggle={contentToggle}
        setContentToggle={setContentToggle}
      />
      <PostFooter
        isLiked={props.postData.isLiked}
        userId={props.postData.usrId}
        likeCount={props.postData.likeCount}
        commentCount={props.postData.comments}
      />
      {contentToggle && (
        <CommentBox
          userId={props.postData.usrId}
          comments={props.postData.comments}
          commentId={props.postData.comments.commentId}
          isMyReply={props.postData.comments.isMyReply}
        />
      )}
    </div>
  );
};

export default Post;

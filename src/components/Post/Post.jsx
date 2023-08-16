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
        userId={props.postData.userId}
        postId={props.postData.id}
        nickName={props.postData.nickName}
        updatedAt={props.postData.updatedAt}
        updataAt={props.postData.updataAt}
      />
      <PostContent
        content={props.postData.content}
        contentToggle={contentToggle}
        setContentToggle={setContentToggle}
      />
      <PostFooter
        userId={props.postData.usrId}
        likeCount={props.postData.likeCount}
        commentCount={props.postData.comments}
      />
      {contentToggle && (
        <CommentBox
          userId={props.postData.usrId}
          comments={props.postData.comments}
          commentId={props.postData.comments.commentId}
        />
      )}
    </div>
  );
};

export default Post;

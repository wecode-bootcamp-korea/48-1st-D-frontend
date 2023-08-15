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
        nickName={props.postData.nickName}
        updatedAt={props.postData.updatedAt}
      />
      <PostContent
        content={props.postData.content}
        contentToggle={contentToggle}
        setContentToggle={setContentToggle}
      />
      <PostFooter
        likeCount={props.postData.likeCount}
        commentCount={props.postData.comments}
      />
      {contentToggle && <CommentBox />}
    </div>
  );
};

export default Post;

import { useState } from 'react';
import PostHeader from '../../components/PostHeader/PostHeader';
import PostContent from '../../components/PostContent/PostContent';
import PostFooter from '../../components/PostFooter/PostFooter';
import CommentBox from '../../components/CommentBox/CommentBox';
import './Post.scss';

const Post = props => {
  const [contentToggle, setContentToggle] = useState(false);
  let nickName = props.postData.nickName;
  let content = props.postData.content;
  let updatedAt = props.postData.updatedAt;
  return (
    <div className="post">
      <PostHeader nickName={nickName} updatedAt={updatedAt} />
      <PostContent
        content={content}
        contentToggle={contentToggle}
        setContentToggle={setContentToggle}
      />
      <PostFooter />
      {contentToggle && <CommentBox />}
    </div>
  );
};

export default Post;

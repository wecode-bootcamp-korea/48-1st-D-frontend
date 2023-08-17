import './PostContent.scss';

const PostContent = props => {
  const onClickPostContent = () => {
    props.onClickPostContent(props.postId);
  };
  return (
    <div className="postContent" onClick={onClickPostContent}>
      {props.content}
    </div>
  );
};

export default PostContent;

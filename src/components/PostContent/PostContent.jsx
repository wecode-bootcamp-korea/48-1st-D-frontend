import './PostContent.scss';

const PostContent = props => {
  const onSubscribe = () => {
    props.setContentToggle(prev => !prev);
  };
  return (
    <div
      className="postContent"
      onClick={!props.contentToggle ? onSubscribe : onSubscribe}
    >
      {props.content}
    </div>
  );
};

export default PostContent;
